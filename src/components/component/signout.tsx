"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const SignoutButton = () => {
  const { data: session, status } = useSession();
  return status === "authenticated" ? (
    <button className="border mx-5 p-1  rounded-md" onClick={() => signOut()}>
      Signout
    </button>
  ) : null;
};

export default SignoutButton;
