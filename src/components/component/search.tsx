// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export function Search() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("Results:", results);
  }, [results]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasValidData = Object.values(formData).some((value) => value !== "");
    if (!hasValidData) {
      console.log("Please enter at least one piece of information");
      return;
    }
    const validFormData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== ""),
    );

    const queryString = new URLSearchParams(validFormData).toString();
    const apiEndpoint = `/api/social?${queryString}`;
    console.log(apiEndpoint);

    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 w-full">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">User Search</h2>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="profile"
            >
              Profile Link
            </label>
            <input
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              id="profile"
              name="profile"
              type="url"
              value={formData.profile}
              onChange={handleChange}
            />
          </div>
        </form>
        <Button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </div>
      {results.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold my-4 dark:text-white">Results</h2>
          <div className="grid grid-cols-1 gap-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-row justify-around items-center"
              >
                <Image
                  src={result.image}
                  alt={result.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h3 className="text-lg font-semibold dark:text-white">
                  {result.name}
                </h3>
                <h3 className="text-lg font-semibold dark:text-white">
                  {result._id}
                </h3>
                <Link
                  className="hover:underline"
                  target="none"
                  href={`./profile/${result._id}`}
                >
                  <Button>See Profile</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
