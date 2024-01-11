import mongoose, { Document, Schema, model, models } from "mongoose";

export interface InterfaceProduct extends Document {
  _id: string;
  status: string;
  title: string;
  slug: string;
  price: number;
  qty: number;
  sku: string;
  salesPrice: number;
  category: {
    _id: string;
    title: string;
  };
  description: string;
  thumbnail: string;
  image?: string;
  images: string[];
  reviews: Object[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  salesEndDate: Date | null;
  salesStartDate: Date | null;
  color: string[];
  size: string[];
}

const productSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    sku: {
      type: String,
      unique: true,
      required: true,
    },
    salesPrice: {
      type: Number,
    },
    color: [{ type: String, required: true }],
    size: [{ type: String, required: true }],

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    salesStartDate: {
      type: Date,
    },
    salesEndDate: {
      type: Date,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
const Product = models?.products || model("products", productSchema);
export default Product;
