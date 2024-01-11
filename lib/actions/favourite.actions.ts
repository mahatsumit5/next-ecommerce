"use server";

import mongoose, { Schema } from "mongoose";
import { connectToDatabase } from "../database";
import Favourite from "../database/models/favourites.models";
import Product from "../database/models/product.models";
import { handleError } from "../utils";

type AddToFavProps = {
  userId: string;
  productId: string;
};

export const addToFavourite = async ({ productId, userId }: AddToFavProps) => {
  try {
    await connectToDatabase();

    const favouriteItems = await Favourite.create({
      user: userId,
      product: productId,
    });
    return {
      status: "success",
      message: "Added to your favourite list",
      result: JSON.parse(JSON.stringify(favouriteItems)) as Object,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getFavouriteByUserAndProduct = async (
  user: string,
  product: string
) => {
  try {
    await connectToDatabase();
    const userId = new mongoose.Types.ObjectId(user);
    const productId = new mongoose.Types.ObjectId(product);
    const condition = {
      user: userId,
      product: productId,
    };
    const favouriteItems = await Favourite.findOne(condition).populate({
      path: "product",
      model: Product,
      select: [
        "title",
        "price",
        "description",
        "images",
        "thumbnail",
        "salesPrice",
      ],
    });
    return {
      status: "success",
      code: 200,
      message: "Your favourite items are:",
      items: JSON.parse(JSON.stringify(favouriteItems)),
    };
  } catch (error) {
    return {
      status: "error",
      message: handleError(error),
    };
  }
};
export const getFavouriteByUser = async (user: string) => {
  try {
    await connectToDatabase();
    const id = new mongoose.Types.ObjectId(user);
    const favouriteItems = await Favourite.find({ user: id }).populate({
      path: "product",
      model: Product,
      select: [
        "title",
        "price",
        "description",
        "images",
        "thumbnail",
        "salesPrice",
      ],
    });
    return {
      status: "success",
      code: 200,
      message: "Your favourite items are:",
      items: JSON.parse(JSON.stringify(favouriteItems)),
    };
  } catch (error) {
    return {
      status: "error",
      message: handleError(error),
    };
  }
};
