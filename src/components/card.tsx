import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@/components/icons"; // Import the specific icons
import { getIcon } from "@/components/icons"; // Import the getIcon function

const Card = ({ link }: { link: any }) => {
  const Icon = getIcon(link[0]); // Call getIcon with the icon name from the link

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-wrap items-center gap-4 hover:cursor-pointer">
      <div className="bg-blue-500 text-white rounded-full p-2">
        {Icon && <Icon className="w-5 h-5" />} {/* Render the icon if it's available */}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold truncate">{link[0]}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm truncate">
          <Link className="hover:underline" target="none" href={link[1]}>
            {link[1]}
          </Link>
        </p>
      </div>
      <Button
        onClick={() => navigator.clipboard.writeText(link[1])}
        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ml-auto"
        size="icon"
        variant="ghost"
      >
        <CopyIcon className="w-5 h-5" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  );
};

export default Card;
