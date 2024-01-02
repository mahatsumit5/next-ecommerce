import Collection from "@/components/shared/Collection";
import { getAllProducts } from "@/lib/actions/product.actions";
import { IProduct, SearchParamProps } from "@/types";
import React from "react";

async function page({ searchParams }: SearchParamProps) {
  const query = (searchParams?.query as string) || "";
  const products: IProduct[] = await getAllProducts(query);
  return (
    <div className="flex flex-col gap-5">
      <Collection
        data={products}
        emptyTitle={`Sorry,No any products available`}
        emptyStateSubtext="Please come back later"
        collectiontype="Products"
      />
      <span>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          View More Similar Products
        </h1>
      </span>
    </div>
  );
}

export default page;
