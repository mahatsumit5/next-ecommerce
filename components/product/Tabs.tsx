import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabsProps } from "@/types";
import { Button } from "../ui/button";
import ReviewDialog from "../dialog/ReviewDialog";

function ProductTabs({ description, review }: ProductTabsProps) {
  console.log(review[0]);
  return (
    <Tabs defaultValue="description" className="w-full min-h-fit">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="review">{review.length} Review</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p className="text-justify">{description}</p>
      </TabsContent>
      <TabsContent value="review">
        {review.map((review, index) => (
          <div className="flex flex-col gap-1 mt-5" key={index}>
            <span className="flex justify-between">
              <p className="font-bold text-xl">{review.title}</p>
              <div className="flex gap-5">
                <Button variant={"link"}>Edit</Button>
                <Button variant={"link"}>Delete</Button>
              </div>
            </span>
            <span className="font-extralight">{review.description}</span>
          </div>
        ))}{" "}
        <ReviewDialog title="Add Review">
          <Button variant={"outline"}>Add Review</Button>
        </ReviewDialog>
      </TabsContent>
    </Tabs>
  );
}

export default ProductTabs;
