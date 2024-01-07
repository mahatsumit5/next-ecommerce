import { Document, Schema, model, models } from "mongoose";

export interface IReview extends Document {
  _id: string;
  description: string;
  rating: number;
  title: string;
  userId: {
    _id: string;
    userName: string | null;
    firstName: string;
    lastName: string;
  };
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
const reviewSchema = new Schema(
  {
    description: { type: String, required: true },
    rating: { type: Number, required: true },

    title: { type: String, required: true },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  { timestamps: true }
);
const Review = models.Review || model("Review", reviewSchema);
export default Review;
