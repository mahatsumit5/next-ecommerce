import React from "react";
import Collection from "./Collection";
import { IProduct } from "@/types";

function SimilarProducts({ title, data }: { title: string; data: IProduct[] }) {
  return (
    <div className="flex flex-col gap-4  mt-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <Collection
        emptyTitle="No any products available"
        emptyStateSubtext="Come back later"
        collectiontype="Products"
        data={data}
      />
    </div>
  );
}

export default SimilarProducts;
