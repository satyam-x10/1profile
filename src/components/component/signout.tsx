'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
const SignoutButton = () => {
    const { data: session,status } = useSession()
  return (
    status === "authenticated" ? (<button className="fixed top-5 right-5 border  rounded-md p-2" onClick={() => signOut()} >Signout</button>):null
  )
}

export default SignoutButton