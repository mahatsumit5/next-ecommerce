import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabsProps } from "@/types";
import ReviewDialog from "../review/ReviewDialog";
import { useUser } from "@clerk/nextjs";
import { IReview } from "@/lib/database/models/review.model";
import ConfirmReviewDelete from "../review/ConfirmReviewDelete";

function ProductTabs({ description, reviews, productId }: ProductTabsProps) {
  const user = useUser();
  const userId = user.user?.publicMetadata.userId;
  return (
    <Tabs defaultValue="description" className="w-full min-h-fit">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="review">
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p className="text-justify">{description}</p>
      </TabsContent>
      <TabsContent value="review" className="max-h-[40vh] overflow-y-auto ">
        <ReviewDialog title="Add Review" productId={productId} />

        {reviews.map((review: IReview, index) => (
          <div className="flex flex-col gap-1 mt-5" key={index}>
            <span className="flex justify-between">
              <span>
                <p className="font-bold text-base uppercase">{review.title}</p>
                <p className="text-muted-foreground text-sm ">
                  {review.userId.firstName}&nbsp;
                  {review.userId.lastName}
                </p>
              </span>

              {user.isSignedIn && review.userId._id === userId && (
                <ConfirmReviewDelete
                  description="Are you sure want to delete? This action can not be undone."
                  title="Delete Review"
                  revewId={review._id}
                />
              )}
            </span>
            <span className="text-muted-foreground font-sans text-sm">
              {review.description}
            </span>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}

export default ProductTabs;
