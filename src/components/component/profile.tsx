// @ts-nocheck
"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Card from "../card";
import { useSession } from "next-auth/react";
import { AddLink, AddInfo } from "./add-data";
import { use, useEffect, useState } from "react";
import SignoutButton from "./signout";
import { FaShareAlt } from "react-icons/fa";
import { CopyIcon } from "../icons";
import SignInButton from "./signIn";

export function Profile() {
  const { data: session } = useSession();
  const [User, setUser] = useState("Loading...");
  const [Links, setLinks] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/user?email=${encodeURIComponent(session?.user?.email || "")}`,
      ); // Pass email as a query parameter
      if (res.ok) {
        const data = await res.json();
        setUser(data.data);
        setLinks(data?.data.socialLinks);
      }

      // const res = await fetch('./api/user', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ Name: 'satyam', Email: 'satyamx40@gmail.com' }),
      // });
    }
    if (session) {
      fetchData();
    }
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
        <div className="bg-gradient-to-r from-[#4c6ef5] to-[#6c63ff] h-32  flex items-center p-2">
          <Avatar
            onClick={() => {
              window.location.href = "/";
            }}
            className=" w-24 h-24 border-4 border-white dark:border-gray-950 hover:cursor-pointer"
          >
            <AvatarImage alt="@shadcn" src={User.image} />
            <AvatarFallback>{session?.user?.name?.split("")[0]}</AvatarFallback>
          </Avatar>

          <div className="px-6 pt-10 pb-6">
            <h2 className="text-2xl font-bold">
              {User?.name || session?.user?.name || "Name"}
              {session && <SignoutButton />}
              {!session && <SignInButton />}
            </h2>

            <div className="text-gray-500 dark:text-gray-800 mt-2">
              <span className="m-1">
                {session?.user?.email?.split("@")[0] || "Email"}
              </span>
              <span className="m-1">{User?.phone || "Phone"}</span>
              <span className="m-1">{User?.address || "Address"}</span>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4"></div>
          </div>
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

        <div className="bg-slate-800 m-0 p-0 rounded-2xl">
          <button
            className="float-end border p-2 rounded-xl m-2 flex flex-row gap-2"
            onClick={() => { }}
          >
            <div>{User?._id}</div>
            <CopyIcon
              onClick={() => {
                navigator.clipboard
                  .writeText(User?._id)
                  .then(() => {
                    console.log("Text copied to clipboard");
                    // Optionally, you can display a toast notification or some feedback to the user
                  })
                  .catch((err) => {
                    console.error("Failed to copy text: ", err);
                  });
              }}
              className="h-full border p-1 rounded-lg"
            />
          </button>
          <button
            className="float-end border p-2 rounded-xl m-2"
            onClick={() => {
              setOpenCard(true);
            }}
          >
            Add new Link
          </button>
          {User && (
            <button
              className={`float-end p-2 rounded-xl m-2 border ${!User.verified ? " border-red-600" : "border-green-600"}`}
              onClick={() => {
                setOpenInfo(true);
              }}
            >
              Update Info
            </button>
          )}
        </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

        {Links &&
          Object.entries(Links).map((link, index) => {
            return <Card key={index} link={link} />;
          })}
      </div>
    </div>
  );
}
