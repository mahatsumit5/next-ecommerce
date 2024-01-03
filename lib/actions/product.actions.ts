import mongoose from "mongoose";
import { connectToDatabase } from "../database";
import { getAllProductProps } from "@/types";

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
export const getAllProducts = async ({
  query,
  limit,
  page,
}: getAllProductProps) => {
  try {
    await connectToDatabase();
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};
    const skipAmount = (Number(page) - 1) * limit;
    const products = await mongoose.connection.db
      .collection("products")
      .find(condition)
      .limit(limit)
      .skip(skipAmount)
      .toArray();
    const totalProducts = await mongoose.connection.db
      .collection("products")
      .countDocuments(condition);
    return {
      data: JSON.parse(JSON.stringify(products)),
      count: Math.ceil(totalProducts / limit),
    };
  } catch (error) {
    console.log(error);
  }
};
export const getFewProducts = async (limit: number, query: string) => {
  try {
    await connectToDatabase();
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};

    const products = await mongoose.connection.db
      .collection("products")
      .find(condition)
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
export const test = async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    console.log(error);
  }
};
