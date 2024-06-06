// @ts-ignore
// @ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Authprovider from "./components/auth/authprovider";
const inter = Inter({ subsets: ["latin"] });
import SignoutButton from "@/components/component/signout";
export const metadata: Metadata = {
  title: "1Profile",
  description: "Have all profile at one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>{children}</Authprovider>
      </body>
    </html>
  );
}
