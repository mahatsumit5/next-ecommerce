import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabsProps } from "@/types";
import { Button } from "../ui/button";
import ReviewDialog from "../review/ReviewDialog";
import { useUser } from "@clerk/nextjs";

function ProductTabs({ description, review, productId }: ProductTabsProps) {
  const user = useUser();

  return (
    <Tabs defaultValue="description" className="w-full min-h-fit">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="review">{review.length} Review</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p className="text-justify">{description}</p>
      </TabsContent>
      <TabsContent value="review" className="max-h-[30vh] overflow-y-auto ">
        <ReviewDialog title="Add Review" productId={productId} />

        {review.map((review, index) => (
          <div className="flex flex-col gap-1 mt-5" key={index}>
            <span className="flex justify-between">
              <p className="font-bold text-base uppercase">{review.title}</p>
              <div className="flex gap-5">
                {user.isSignedIn && <Button variant={"link"}>Delete</Button>}
              </div>
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
