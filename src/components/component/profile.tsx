/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vwHPRR7oe28
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import Card from "../card"

export function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#4c6ef5] to-[#6c63ff] h-32 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-950">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="px-6 pt-16 pb-6 text-center">
          <h2 className="text-2xl font-bold">Cody Newman</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">@codynewman</p>
          <div className="flex items-center justify-center gap-4 mt-4">            
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
      </div>
    </div>
  )
}
