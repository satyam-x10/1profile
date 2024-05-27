// @ts-ignore
import { connectToMongoDB } from "@/lib/db";
import User from "@/lib/models/user";
import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectToMongoDB(); // Ensure you're connected to MongoDB
    const body = await request.json(); // Parse JSON data from request body
    const { Email, NewLink } = body;

    console.log(Email, NewLink);

    if (!Email || !NewLink || !NewLink.platform || !NewLink.link) {
      return NextResponse.json(
        { message: "Invalid input data" },
        { status: 400 },
      );
    }

    // Update the user's socialLinks field if the user exists or create a new user
    const update = { [`socialLinks.${NewLink.platform}`]: NewLink.link };

    const user = await User.findOneAndUpdate(
      { email: Email },
      { $set: update },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    );

    return NextResponse.json({
      message: "Link added/updated successfully!",
      user,
    });
  } catch (error) {
    console.error("Error updating social links:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
