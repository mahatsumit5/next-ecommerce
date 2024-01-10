"use server";
import mongoose from "mongoose";
import { connectToDatabase } from "../database";
import { ICartState, getAllProductProps } from "@/types";
import { handleError } from "../utils";
import Product from "../database/models/product.models";
import Category from "../database/models/category.models";

export const getProductsByCategory = async (category?: string, id?: string) => {
  try {
    const _id = new mongoose.Types.ObjectId(id);
    await connectToDatabase();
    const cat = await Category.findOne({ slug: category });
    const products = await Product.find({
      category: !id ? cat._id : _id,
    });

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    handleError(error);
  }
};
export const getAllProducts = async ({
  query,
  limit,
  page,
  sort,
  category,
  size,
  gte,
  lte,
}: getAllProductProps) => {
  try {
    await connectToDatabase();
    const searchedCategory = await Category.findOne({ slug: category }).select([
      "_id",
    ]);
    const slugConn = query
      ? {
          slug: { $regex: query, $options: "i" },
        }
      : {};
    const categoryConn = searchedCategory
      ? {
          $or: [
            {
              category: searchedCategory._id,
            },
          ],
        }
      : {};
    const sizeConn = {
      size: { $in: size },
    };
    const priceConn = {
      price: { $gte: gte, $lte: lte },
    };

    const skipAmount = (Number(page) - 1) * limit;
    const products = await Product.find({
      ...sizeConn,
      ...categoryConn,
      ...slugConn,
      ...priceConn,
    })

      .limit(limit)
      .skip(skipAmount)
      .sort({ price: sort });

    const totalProducts = await mongoose.connection.db
      .collection("products")
      .countDocuments({ ...sizeConn, ...categoryConn, ...slugConn });
    return {
      data: JSON.parse(JSON.stringify(products)),
      count: Math.ceil(totalProducts / limit),
      totalProducts,
    };
  } catch (error) {
    handleError(error);
  }
};
export const getFewProducts = async (limit: number, query: string) => {
  try {
    await connectToDatabase();
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};
    const products = await Product.find(condition).limit(limit).skip(0);

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    handleError(error);
  }
};
export const getProductsBySlug = async (slug: string) => {
  try {
    await connectToDatabase();

    const product = await mongoose.connection
      .collection("products")
      .findOne({ slug });

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    handleError(error);
  }
};

export const updateProductQuantity = async (cart: ICartState[]) => {
  try {
    return;
    // await connectToDatabase();
    // let updated: IProduct[] = [];
    // for (let i = 0; i < cart.length; i++) {
    //   const result = await Product.findById(cart[i]._id);
    //   const newQuantity = result.qty - cart[i].orderQty;

    //   const updatedProduct = await Product.findByIdAndUpdate(
    //     cart[i]._id,
    //     { qty: newQuantity },
    //     { new: true }
    //   );
    //   updated = [...updated, updatedProduct];
    // }
    // return JSON.parse(JSON.stringify(updated));
  } catch (error) {
    handleError(error);
  }
};
export const getSearchedProducts = async (query: string) => {
  try {
    await connectToDatabase();
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};
    const result = await Product.find(condition).select([
      "_id",
      "slug",
      "title",
      "thumbnail",
    ]);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};
