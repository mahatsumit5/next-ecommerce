import Collection from "@/components/shared/Collection";
import { ProductPagination } from "@/components/shared/Pagination";
import { getAllProducts } from "@/lib/actions/product.actions";
import { IProduct, SearchParamProps } from "@/types";
import React from "react";

async function page({ searchParams }: SearchParamProps) {
  const query = (searchParams?.query as string) || "";
  const page = (searchParams?.page as string) || "";
  const data = await getAllProducts({
    limit: 2,
    query,
    page: Number(page),
  });
  return (
    <div className="flex flex-col gap-5">
      <Collection
        data={data?.data}
        emptyTitle={`Sorry,No any products available`}
        emptyStateSubtext="Please come back later"
        collectiontype="Products"
      />
      <ProductPagination count={data?.count as number} />
      <span className="mt-5">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
          View More Similar Products
        </h1>
      </span>
    </div>
  );
}

export default page;
