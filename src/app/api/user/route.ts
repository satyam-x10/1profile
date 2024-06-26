import { connectToMongoDB } from "@/lib/db";
import User from "@/lib/models/user";
import { error, log } from "console";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    await connectToMongoDB();
    const url = new URL(request.url);
    const email = url.searchParams.get("email");
    const id = url.searchParams.get("id");

    var data;
    if (email) {
      console.log("email", email);

      data = await User.findOne({ email }); // Find user by email
      if (!data) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 },
        );
      }
    }
    if (id) {
      console.log("id", id);

      data = await User.findById(id).select("name contact socialLinks").lean(); // Find user by id
      if (!data) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 },
        );
      }
    }

    console.log("data", email ? "email" : "id", data);

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 },
    );
  } finally {
    // Optional: Close the MongoDB connection if you open it manually
  }
}

export async function POST(request: Request) {
  try {
    await connectToMongoDB();
    const body = await request.json(); // Parse JSON data from request body
    const { Name, Email, Phone, Address, Image } = body; // Destructure title and content from parsed JSON
    console.log(Name, Email, Phone, Address, Image);

    const user = await User.findOneAndUpdate(
      { email: Email },
      {
        $set: {
          name: Name,
          phone: Phone,
          address: Address,
          email: Email,
          image: Image,
          verified: true,
        },
      },
      { upsert: true, new: false },
    );
    console.log(user);

    return NextResponse.json({ message: "user created successfully!" });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.error();
  }
}
