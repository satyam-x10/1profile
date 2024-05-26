"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Card from "../card";
import { useSession } from "next-auth/react";
import { AddLink, AddInfo } from "./add-data";
import { useEffect, useState } from "react";

export function Profile() {
  const { data: session } = useSession();
  const [User, setUser] = useState('Loading...');
  useEffect(() => {
    async function fetchData() {

      const res = await fetch(`/api/user?email=${encodeURIComponent(session?.user?.email || "")}`); // Pass email as a query parameter
      if (res.ok) {
        const data = await res.json();
        setUser(data.data);
      }


      // const res = await fetch('./api/user', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ Name: 'satyam', Email: 'satyamx40@gmail.com' }),
      // });



    }
    fetchData();
  }, [session]);

  // const { data: session } = useSession();

  const [openCard, setOpenCard] = useState(false);
  const handleCloseCard = () => {
    setOpenCard(false);
  };

  const [openInfo, setOpenInfo] = useState(false);
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#4c6ef5] to-[#6c63ff] h-32 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src={session?.user?.image ?? ""} />
              <AvatarFallback>
                {session?.user?.name?.split("")[0]}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div>
          <button
            className="float-end border p-2 rounded-xl m-2"
            onClick={() => {
              setOpenCard(true);
            }}
          >
            Add new Link
          </button>
          <button
            className={`float-end p-2 rounded-xl m-2 border ${!User.verified ? ' border-red-600' : 'border-green-600'}`}
            onClick={() => {
              setOpenInfo(true);
            }}
          >

            Update Info
          </button>
        </div>
        <div>
          {openCard && (
            <div className="w-full h-full">
              <AddLink onClose={handleCloseCard} />
            </div>
          )}
          {openInfo && (
            <div className="w-full h-full">
              <AddInfo onClose={handleCloseInfo} User={User} />
            </div>
          )}
        </div>
        <div className="px-6 pt-16 pb-6 text-center">
          <h2 className="text-2xl font-bold">
            {User?.name || session?.user?.name || "Name"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {session?.user?.email?.split("@")[0] || "Email"}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <Card />
        </div>
      </div>
    </div>
  );
}
