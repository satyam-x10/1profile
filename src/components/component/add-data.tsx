import { useEffect, useState } from "react";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Platforms from "../../../public/platforms";
import { useSession } from "next-auth/react";

export function AddLink({ onClose }) {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");
  const { data: session } = useSession();

  const addLink = () => {
    console.log(platform, link, session?.user?.email);
    async function UpdateLink() {
      const res = await fetch("./api/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: session?.user?.email,
          NewLink: { platform, link },
        }),
      });
    }
    if (platform && link) {
      UpdateLink();
      onClose();
      window.location.reload();
    }
  };

  return (
    <div className="w-full h-full fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
      <Card className="w-full h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="border p-2 rounded-md float-end m-2"
        >
          Close
        </button>
        <CardHeader>
          <CardTitle>Add Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 gap-1">
          <div className="space-y-2">
            <Label htmlFor="option">Select Platform, or name it</Label>
            <div id="option" className="w-full border rounded-md p-2">
              {Platforms.map((platformObj, index) => {
                const platformName = Object.keys(platformObj)[0];
                return (
                  <button
                    onClick={() => setPlatform(platformName)}
                    className={`border p-2 rounded-md m-1 hover:bg-black ${platform === platformName ? "bg-black text-white" : ""}`}
                    key={index}
                  >
                    {platformName}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="link">Link</Label>
            <Input
              id="link"
              placeholder="Enter a link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={addLink}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function AddInfo({ onClose, User }) {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const { data: session } = useSession();
  const [form, setForm] = useState({
    name: session?.user.name,
    phone: User.phone,
    address: User.address,
    email: session?.user.email,
  });

  useEffect(() => {
    if (uploaded) {
      onClose();
      window.location.reload();
    }
  }, [uploaded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const updateInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Phone: form.phone,
          Address: form.address,
          Email: form.email,
        }),
      });

      setLoading(false);
      setUploaded(true);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  return (
    <div className="w-full h-full fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="border p-2 rounded-md float-end m-2"
        >
          Close
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold">Update Your Info</h2>
        </div>
        <div className="space-y-4 gap-1 p-4 text-black">
          <div className="flex flex-col space-y-2"></div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 dark:text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              className="border p-2 rounded-md"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 dark:text-gray-200" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border p-2 rounded-md"
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="border p-2 rounded-md"
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div className="flex justify-end p-4">
          {loading && (
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Loading...
            </button>
          )}
          {!loading && (
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={updateInfo}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
