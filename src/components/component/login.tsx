
'use client'
import { Button } from "@/components/ui/button"
import { signIn, signOut } from "next-auth/react"

export function LoginGoogle() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-6 px-4">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-gray-500 dark:text-gray-400">Sign in to your account to continue</p>
      </div>
      <Button onClick={()=>signIn('google')} className="w-full max-w-[300px]" variant="outline">
        Sign in with Google
      </Button>
      <Button onClick={()=>signOut()} className="w-full max-w-[300px]" variant="outline">
        Sign out
      </Button>
    </div>
  )
}

