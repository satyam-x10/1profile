"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const SignInButton = () => {
  const { data: session, status } = useSession();
  return  (
    <button className="border mx-5 p-1  rounded-md" onClick={() => signIn('google')}>
      SignIn
    </button>
  ) 
};

export default SignInButton;
