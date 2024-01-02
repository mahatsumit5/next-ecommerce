import mongoose from "mongoose";
import { connectToDatabase } from "../database";

export const getProductsByCategory = async (category?: string, id?: string) => {
  try {
    const _id = new mongoose.Types.ObjectId(id);
    await connectToDatabase();
    const cat = await mongoose.connection.db
      .collection("categories")
      .findOne({ slug: category });
    const products = await mongoose.connection.db
      .collection("products")
      .find({ parentCat: !id ? cat?._id : _id })
      .toArray();
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};
export const getAllProducts = async (query: string) => {
  try {
    await connectToDatabase();
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};
    const products = await mongoose.connection.db
      .collection("products")
      .find(condition)
      .toArray();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};
export const getFewProducts = async (limit: number) => {
  try {
    await connectToDatabase();

    const products = await mongoose.connection.db
      .collection("products")
      .find()
      .limit(limit)
      .skip(0)
      .toArray();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};
export const getProductsBySlug = async (slug: string) => {
  try {
    await connectToDatabase();

    const product = await mongoose.connection.db
      .collection("products")
      .findOne({ slug });

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
};
