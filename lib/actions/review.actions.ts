"use server";

import { connectToDatabase } from "../database";
import Review, { IReview } from "../database/models/review.model";
import Customer from "../database/models/user.model";
import { handleError } from "../utils";

type CreateReviewParams = {
  productId: string;
  rating: number;
  description: string;
  title: string;
  userId: string;
};
export const createReview = async (review: CreateReviewParams) => {
  try {
    await connectToDatabase();
    const newReview = await Review.create(review);
    return JSON.parse(JSON.stringify(newReview));
  } catch (error) {
    handleError(error);
  }
};

export const getReviews = async (productId: string) => {
  try {
    await connectToDatabase();
    const reviews = await Review.find({ productId }).populate({
      path: "userId",
      model: Customer,
      select: "firstName lastName userName",
    });
    const reviewsCount = await Review.countDocuments({ productId });
    return {
      reviews:
        (JSON.parse(JSON.stringify(reviews)) as IReview[]) || ([] as IReview[]),
      count: reviewsCount as number,
    };
  } catch (error) {
    handleError(error);
  }
};

export const deleteReviewById = async (id: string) => {
  try {
    await connectToDatabase();
    const deletedReview = await Review.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify(deletedReview));
  } catch (error) {
    handleError(error);
  }
};
