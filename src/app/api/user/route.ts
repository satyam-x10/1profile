import { connectToMongoDB } from "@/lib/db";
import User from "@/lib/models/user";
import { log } from "console";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    await connectToMongoDB();
    const url = new URL(request.url);
    const email = url.searchParams.get("email");


    const data = await User.findOne({ email }); // Find user by email
    if (!data) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 }
    );
  } finally {
    // Optional: Close the MongoDB connection if you open it manually
  }
}

export async function POST(request: Request) {

  try {
    await connectToMongoDB();
    const body = await request.json(); // Parse JSON data from request body
    const { Name, Email } = body; // Destructure title and content from parsed JSON

    const user = await User.findOneAndUpdate(
      { email: Email },
      { $setOnInsert: { name: Name, email: Email } },
      { upsert: true, new: false }
    );

    return NextResponse.json({ message: "user created successfully!" });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.error();
  }
}
