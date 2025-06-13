'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticatedApi } from '@/service/auth.api'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await isAuthenticatedApi()
        if (res.success) {
          router.replace('/') // already logged in, go to dashboard
        } else {
          setChecking(false) // allow login page to show
        }
      } catch (err) {
        console.error('Auth check failed:', err)
        setChecking(false)
      }
    }

    checkAuth()
  }, [])

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent" />
      </div>
    )
  }

  return <>{children}</>
}

export default AuthGuard
