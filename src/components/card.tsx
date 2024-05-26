import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const Card = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-wrap items-center gap-4">
      <div className="bg-blue-500 text-white rounded-full p-2">
        <TwitterIcon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold truncate">Twitter</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm truncate">
          <Link className="hover:underline" href="#">
            twitter.com/codynewman
          </Link>
        </p>
      </div>
      <Button
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
