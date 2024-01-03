import mongoose from "mongoose";
let cached = (global as any).mongoose || { conn: null, promise: null };

const MONGO_URI = process.env.MONGODB_URI;
export const connectToDatabase = async () => {
  try {
    if (!MONGO_URI) throw new Error("mongouri is missing");
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGO_URI!, {
        dbName: "test",
        bufferCommands: false,
      });
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.log("MongoDB connection error", error);
    throw error;
  }
};
