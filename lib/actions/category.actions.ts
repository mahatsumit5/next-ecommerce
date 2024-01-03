"use server";

import { connectToDatabase } from "../database";
import mongoose from "mongoose";
import ParentCatalogue from "../database/models/mainCatalalogues.models";

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
    const categories = await ParentCatalogue.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};
export const getCatByParentCat = async (parentID: string) => {
  try {
    const mongooseObjectId = new mongoose.Types.ObjectId(parentID);
    await connectToDatabase();
    const categories = await mongoose.connection.db
      .collection("categories")
      .find({ parentCat: mongooseObjectId })
      .toArray();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};
