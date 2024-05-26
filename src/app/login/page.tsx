"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";

const Loginpage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      {status == "unauthenticated" ? (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-6 px-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to your account to continue
            </p>
          </div>
          <button
            onClick={() => {
              signIn("google");
            }}
            className="w-full max-w-[300px] border p-2 rounded-md"
          >
            Sign in with Google
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-6 px-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
              Welcome Back! {session?.user?.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Lets find your person
            </p>
          </div>
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="w-full max-w-[300px] border p-2 rounded-md"
          >
            Lets go
          </button>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
