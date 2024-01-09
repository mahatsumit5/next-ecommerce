"use server";

import { connectToDatabase } from "../database";
import mongoose from "mongoose";
import Category from "../database/models/category.models";
import { handleError } from "../utils";

export const getAllCategories = async (query: string) => {
  try {
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};

    await connectToDatabase();
    const categories = await Category.find(condition);

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};

export const getCatByParentCat = async (parentID: string) => {
  try {
    const mongooseObjectId = new mongoose.Types.ObjectId(parentID);
    await connectToDatabase();
    const categories = await Category.find({
      parentCategory: mongooseObjectId,
    });

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
