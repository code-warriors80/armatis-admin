/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { isAuthenticatedApi, userProfileApi } from '@/service/auth.api'
import { useAuthStore } from '@/store/useAuthStore'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type UserContextType = {
  user: any
  setUser: (user: any) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { setUser, user } = useAuthStore()
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const isAuthPage = pathname.startsWith('/auth')

  useEffect(() => {
    const checkAuth = async () => {
      // If on an /auth route, no need to verify
      if (isAuthPage) {
        setLoading(false)
        return
      }

      try {
        const authRes = await isAuthenticatedApi()

        if (!authRes.success) {
          window.location.href = '/auth/login'
          return
        }

        const profileRes = await userProfileApi()
        if (profileRes.success) {
          setUser(profileRes.user as any)
        } else {
          window.location.href = '/auth/login'
        }
      } catch (error) {
        console.error('Authentication error:', error)
        window.location.href = '/auth/login'
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [isAuthPage])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  // Don't render children at all if we're on a protected page and not authenticated yet
  if (!isAuthPage && !user) return null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used inside UserProvider')
  return context
}
