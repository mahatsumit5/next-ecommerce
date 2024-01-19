"use server";

import mongoose, { Schema } from "mongoose";
import { connectToDatabase } from "../database";
import Favourite, {
  InterfaceFavourite,
} from "../database/models/favourites.models";
import Product from "../database/models/product.models";
import { handleError } from "../utils";

type AddToFavProps = {
  userId: string;
  productId: string;
};

export const addToFavourite = async ({ productId, userId }: AddToFavProps) => {
  try {
    const userObjId = new mongoose.Types.ObjectId(userId);
    await connectToDatabase();
    const result = await Favourite.findOne({ user: userObjId });

    if (result) {
      const favouriteItems = await Favourite.findByIdAndUpdate(result._id, {
        product: [...result.product, productId],
      });
      return {
        status: "success",
        message: "Added to your favourite list",
        result: JSON.parse(JSON.stringify(favouriteItems)) as Object,
      };
    }
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
    console.log(error);
    return handleError(error);
  }
};

export const getFavouriteByUserAndProduct = async (user: string) => {
  try {
    await connectToDatabase();
    const userId = new mongoose.Types.ObjectId(user);
    const condition = {
      user: userId,
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
    const favouriteItems = await Favourite.findOne({ user: id }).populate({
      path: "product",
      model: Product,
      select: [
        "title",
        "price",
        "description",
        "images",
        "thumbnail",
        "salesPrice",
        "slug",
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

export const deleteFavouriteById = async (id: string) => {
  try {
    console.log(id);
    await connectToDatabase();

    const result = await Favourite.findByIdAndDelete(id);
    if (result.ok) {
      return JSON.parse(JSON.stringify(result));
    } else {
      return {
        status: "error",
        message: "Unable to delete",
      };
    }
  } catch (error) {
    return handleError(error);
  }
};
