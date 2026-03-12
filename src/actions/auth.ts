'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import User from '@/models/User'
import { connectToDatabase } from '@/lib/mongodb'
import { usernameToName } from '@/lib/utils'
import { AuthResponse, SignupData, SigninData } from '@/types/auth'

export async function signup (data: SignupData): Promise<AuthResponse> {
  const { username, email, password } = data
  const name = usernameToName(username)

  try {
    await connectToDatabase()

    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return { error: 'User already exists.' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({ name, username, email, password: hashedPassword })

    return { success: true }
  } catch (err) {
    return { error: 'Signup failed. Please try again.' }
  }
}

export async function signin (data: SigninData): Promise<AuthResponse> {
  const { email, password } = data

  try {
    await connectToDatabase()

    const user = await User.findOne({ email })
    const isMatch = user ? await bcrypt.compare(password, user.password) : false

    if (!isMatch) {
      return { error: 'Invalid email or password.' }
    }

    const cookieStore = await cookies()
    cookieStore.set('session', user!._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })

    return {
      success: true,
      user: { name: user.name, email: user.email, username: user.username }
    }
  } catch (err) {
    return { error: 'Signin failed. Please try again.' }
  }
}

export async function logout () {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  redirect('/signin')
}
