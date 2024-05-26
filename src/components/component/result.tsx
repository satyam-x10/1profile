import React from "react";
import Link from "next/link";
const Result = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        Search Results
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                Name
              </th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                Email
              </th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                Phone
              </th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                Profile
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                John Doe
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                john@example.com
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                555-1234
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                <Link
                  className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-500"
                  href="#"
                >
                  View Profile
                </Link>
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                Jane Smith
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                jane@example.com
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                555-5678
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                <Link
                  className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-500"
                  href="#"
                >
                  View Profile
                </Link>
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                Bob Johnson
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                bob@example.com
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                555-9012
              </td>
              <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                <Link
                  className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-500"
                  href="#"
                >
                  View Profile
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
