const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

export const connectToMongoDB = async () => {
  try {
    // Define MongoDB connection URL
    const mongoURI = process.env.MONGO_URI;

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {});

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
