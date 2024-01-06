import mongoose from "mongoose";
import { connectToDatabase } from "../database";
import { ICartState, IProduct, getAllProductProps } from "@/types";
import { handleError } from "../utils";

export const getProductsByCategory = async (category?: string, id?: string) => {
  try {
    const _id = new mongoose.Types.ObjectId(id);
    await connectToDatabase();
    const cat = await mongoose.connection.db
      .collection("categories")
      .findOne({ slug: category });
    const products = await mongoose.connection
      .collection("products")
      .find({
        parentCat: !id ? cat?._id : _id,
      })
      .toArray();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    handleError(error);
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
    const products = await mongoose.connection
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
    handleError(error);
  }
};
export const getFewProducts = async (limit: number, query: string) => {
  try {
    await connectToDatabase();
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};
    const products = await mongoose.connection
      .collection("products")
      .find(condition)
      .limit(limit)
      .skip(0)
      .toArray();

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
    const connection = await connectToDatabase();
    console.log(connection);
    const condition = query ? { slug: { $regex: query, $options: "i" } } : {};

    const result = await mongoose.connection
      .collection("products")
      .find(condition)
      .toArray();
    console.log(result);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    handleError(error);
  }
};
