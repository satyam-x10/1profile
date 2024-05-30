import { connectToMongoDB } from "@/lib/db";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectToMongoDB();

  const { searchParams } = new URL(request.url);
  const queryObject = {};

  // Extract query parameters
  const profileLink = searchParams.get("profile");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const name = searchParams.get("name");
  const address = searchParams.get("address");

  // Priority 1: Profile link
  if (profileLink) {
    queryObject["socialLinks"] = { $regex: profileLink }; // Partial match in socialLinks values
  }
  // Priority 2: Email
  else if (email) {
    queryObject.email = email;
  }
  // Priority 3: Phone
  else if (phone) {
    queryObject.phone = phone;
  }
  // Priority 4: Name
  else if (name) {
    const nameWords = name.split(/[\s,]+/);
    queryObject.name = { $regex: nameWords.join("|"), $options: "i" };
  }
  // Priority 5: Address
  else if (address) {
    const addressWords = address.split(/[\s,]+/);
    queryObject.address = { $regex: addressWords.join("|"), $options: "i" };
  }

  try {
    const users = await User.find(queryObject).select("_id name image"); // Only return the user IDs
    console.log("Users:", users);

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.error();
  }
}
