import Collection from "@/components/shared/Collection";
import { getProductsByCategory } from "@/lib/actions/product.actions";
import { IProduct, SearchParamProps } from "@/types";
import React from "react";

async function page({ params: { slug } }: SearchParamProps) {
  const products: IProduct[] = await getProductsByCategory(slug);
  return (
    <div className="flex flex-col gap-10">
      <Collection
        data={products}
        emptyTitle={`Sorry,No any ${slug} available`}
        emptyStateSubtext="Please come back later"
        collectiontype="Products"
        slug={slug}
      />
      <span className="">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          View More Similar Products
        </h1>
      </span>
    </div>
  );
}

export default page;
