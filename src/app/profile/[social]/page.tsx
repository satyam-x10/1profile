"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Card from "../../../components/card";
import { useSession } from "next-auth/react";
import { AddLink, AddInfo } from "../../../components/component/add-data";
import { use, useEffect, useState } from "react";
import SignoutButton from "@/components/component/signout";
import { FaShareAlt } from "react-icons/fa";
import { CopyIcon } from "@/components/icons";
import { SocialProfile } from "@/components/component/social-profile";
import { PageProps } from "../../../../.next/types/app/layout";

const SocialPage: React.FC<PageProps> = ({ params }) => {
  const [Socialdata, setSocialdata] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/user?id=${encodeURIComponent(params.social)}`,
      );
      if (res.ok) {
        const data = await res.json();
        setSocialdata(data);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {Socialdata && <SocialProfile Socialdata={Socialdata.data} />}
      {!Socialdata && <div>Loading...</div>}
    </div>
  );
};

export default SocialPage;
