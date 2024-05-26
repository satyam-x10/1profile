const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user");
dotenv.config();

export const connectToMongoDB = async () => {
  try {
    // Define MongoDB connection URL
    const mongoURI = process.env.MONGO_URI;

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export const createUser = async (name, email) => {
  try {
    await connectToMongoDB();

    // Create a new user instance
    const newUser = new User({
      name: name,
      email: email,
    });

    // Save the user to the database
    await newUser.save();

    console.log("User created successfully:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
};
