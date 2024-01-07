import { Schema, model, models } from "mongoose";

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
