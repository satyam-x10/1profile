"use client";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { Search } from "@/components/component/search";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  } else if (status === "unauthenticated") {
    return <div>Redirecting to login page...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {session ? (
          <div className="flex flex-col items-center space-x-4 gap-2">
            <h1 className="text-2xl font-bold">WELCOME {session.user?.name}</h1>
            <h1 className="text-2xl font-bold">
              Lets Search your friend on the internet
            </h1>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Login please</h1>
          </div>
        )}
      </div>
      <Search />
    </main>
  );
}
