import { Document, Schema, model, models } from "mongoose";

export interface InterfaceFavourite extends Document {
  _id: string;
  user: {
    _id: string;
    username: string;
    fName: string;
    lName: string;
    email: string;
  };
  product: [
    {
      _id: string;
      title: string;
      price: number;
      description: string;
      images: Array<string>;
      thumbnail: string;
      salesPrice: number;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
}
export interface Ifavourite {
  _id: string;
  user: string;
  product: [
    {
      _id: string;
      title: string;
      price: number;
      description: string;
      images: Array<string>;
      thumbnail: string;
      salesPrice: number;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
}
const favouriteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
      unique: true,
      index: 1,
    },
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
    ],
  },
  { timestamps: true }
  // Create a compound index to make the combination of user and product unique
);

const Favourite = models.Favourite || model("Favourite", favouriteSchema);
export default Favourite;
