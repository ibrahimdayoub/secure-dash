import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthState } from '@/types/auth'

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      isLoading: true,
      setUser: user => set({ user }),
      setIsLoading: loading => set({ isLoading: loading })
    }),
    {
      name: 'auth-storage'
    }
  )
)
