
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Search() {
  return (
    <div className="px-4 py-8 sm:px-6 w-full">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">User Search</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="name"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="phone">
              Phone
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="phone"
              name="phone"
              type="tel"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="profile">
              Profile Link
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="profile"
              name="profile"
              type="url"
            />
          </div>
        </form>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Search
        </Button>
      </div>
      
    </div>
  )
}
