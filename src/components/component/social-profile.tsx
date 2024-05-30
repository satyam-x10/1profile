import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Card from "../card";
export function SocialProfile({
  Socialdata,
}: {
  Socialdata: {
    name: string;
    _id: string;
    socialLinks: {
      [key: string]: string;
    };
  };
}) {
  console.log(Socialdata);

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <Avatar className="h-24 w-24">
        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
        <AvatarFallback>{Socialdata.name.split(" ")[0]}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{Socialdata.name}</h2>
        <p className="text-gray-500 dark:text-gray-400">{Socialdata._id}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {Socialdata.socialLinks &&
          Object.entries(Socialdata.socialLinks).map((link, index) => {
            return <Card key={index} link={link} />;
          })}
      </div>
    </div>
  );
}
