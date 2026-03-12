'use server'

import { cookies } from 'next/headers'
import User from '@/models/User'
import { connectToDatabase } from '@/lib/mongodb'
import { AuthResponse, User as UserProfile } from '@/types/auth'

export async function getCurrentUser (): Promise<UserProfile | null> {
  await connectToDatabase()
  const userId = await getSessionUserId()

  if (!userId) return null

  const user = await User.findById(userId).select('-password')
  if (!user) return null

  return {
    id: user._id.toString(),
    name: user.name,
    username: user.username,
    email: user.email
  }
}

export async function updateCurrentUser (
  updateData: Partial<Pick<UserProfile, 'name' | 'username'>>
): Promise<AuthResponse> {
  await connectToDatabase()
  const userId = await getSessionUserId()

  if (!userId) return { error: 'Not authenticated.' }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true, select: '-password' }
    )

    if (!updatedUser) return { error: 'User not found.' }

    return {
      success: true,
      user: {
        id: updatedUser._id.toString(),
        name: updatedUser.name,
        username: updatedUser.username,
        email: updatedUser.email
      }
    }
  } catch (err) {
    console.error('Update Error:', err)
    return { error: 'Update failed. Please try again.' }
  }
}

// Helpers ----------------------------------------------------------------------------------------

async function getSessionUserId (): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get('session')?.value || null
}
