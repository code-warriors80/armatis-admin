// store/useAuthStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthUser {
  _id: string
  userName: string
  email: string
  isVerified: boolean
}

interface AuthStore {
  user: AuthUser | null
  setUser: (user: AuthUser) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        set({ user })
      },
      logout: () => {
        set({ user: null })
      },
    }),
    {
      name: 'auth-store',
    }
  )
)
