"use server";

import { connectToDatabase } from "../database";
import mongoose from "mongoose";
import Category from "../database/models/category.models";
import { handleError } from "../utils";

export const getAllCategories = async ({
  query,
  skip,
  limit,
}: {
  query: string;
  skip: number;
  limit?: number;
}) => {
  try {
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};

    await connectToDatabase();
    const categories = await Category.find(condition)
      .limit(limit ? limit : 0)
      .skip(skip);
    const documentCount = await Category.countDocuments();
    return {
      data: JSON.parse(JSON.stringify(categories)),
      total: Math.ceil(documentCount / 4),
    };
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
