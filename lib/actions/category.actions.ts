"use server";

import { connectToDatabase } from "../database";
import mongoose from "mongoose";

export const getAllCategories = async (query: string) => {
  try {
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};

    await connectToDatabase();
    const categories = await mongoose.connection.db
      .collection("categories")
      .find(condition)
      .toArray();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};
export const getMainCategories = async () => {
  try {
    await connectToDatabase();
    const categories = await mongoose.connection.db
      .collection("maincats")
      .find()
      .toArray();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};
