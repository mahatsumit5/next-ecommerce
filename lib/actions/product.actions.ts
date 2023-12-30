import mongoose from "mongoose";
import { connectToDatabase } from "../database";
import { Category } from "../database/models";

export const getProductsByCategory = async (category: string) => {
  try {
    await connectToDatabase();
    const cat = await mongoose.connection.db
      .collection("categories")
      .findOne({ slug: category });
    const products = await mongoose.connection.db
      .collection("products")
      .find({ parentCat: cat?._id })
      .toArray();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};
