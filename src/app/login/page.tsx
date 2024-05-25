'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Login = () => {
    const session = useSession();
    console.log(session)
    return (
        <div>
            <button className='border border-white h-10' onClick={() => { signIn('google') }}>login with google</button>
            <div>{session.data?.user?.name}</div>
            <button className='border border-white h-10' onClick={() => { signOut() }}>signout</button>
        </div>
    )
}

export default Login