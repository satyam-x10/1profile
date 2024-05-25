import { useState } from "react";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Platforms from "../../../public/platforms";

export function AddLink({ onClose }: { onClose: any }) {

  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");

  const addLink = () => {
    if (platform && link) {
      console.log(platform, link);
    }
    else {
      console.log("Please fill all the fields");
    }
  }
  return (
    <div className="w-full h-full fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
      <Card className="w-full h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <button onClick={onClose} className="border p-2 rounded-md float-end m-2">Close</button>
        <CardHeader>
          <CardTitle>Add Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 gap-1">
          <div className="space-y-2">
            <Label htmlFor="option">Select Platform, or name it</Label>
            <div id="option" className="w-full border rounded-md p-2">
              {Platforms.map((platform, index) => {
                return (
                  <button onClick={() => setPlatform(Object.keys(platform)[0])} className="border p-2 rounded-md m-1 hover:bg-black" key={index}>{Object.keys(platform)[0]}</button>
                )
              })}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="link">Link</Label>
            <Input id="link" placeholder="Enter a link" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={addLink}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
