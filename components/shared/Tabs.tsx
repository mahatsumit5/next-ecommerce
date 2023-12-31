import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabsProps } from "@/types";
import { Button } from "../ui/button";

function ProductTabs({ description, review }: ProductTabsProps) {
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
        {review.map((review) => (
          <div className="flex flex-col gap-3">
            <span className="flex justify-between">
              <p className="font-bold text-3xl">{review.title}</p>
              <div className="flex gap-5">
                <Button>Edit</Button>
                <Button variant={"destructive"}>Delete</Button>
              </div>
            </span>
            <span>{review.description}</span>
            <span>
              <Button variant={"primary"}>Write a Review</Button>
            </span>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}

export default ProductTabs;
