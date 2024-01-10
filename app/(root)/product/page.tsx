import Filter from "@/components/filter/Filter";
import Collection from "@/components/shared/Collection";
import { ProductPagination } from "@/components/shared/Pagination";
import { getAllProducts } from "@/lib/actions/product.actions";
import { IProduct, SearchParamProps } from "@/types";
import React from "react";

async function page({ searchParams }: SearchParamProps) {
  const query = (searchParams?.query as string) || "";
  const page = (searchParams?.page as string) || 1;
  const sort = (searchParams?.sort as string) || "asc";
  const category = (searchParams?.category as string) || "";
  const limit = (searchParams?.limit as string) || 4;
  const data = await getAllProducts({
    limit: Number(limit),
    query,
    page: Number(page),
    sort: sort,
    category,
  });

  return (
    <div className="flex flex-col gap-5">
      <Filter total={data?.totalProducts as number} />
      <Collection
        data={data?.data}
        emptyTitle={
          category
            ? `Sorry,No any ${category} available`
            : "Sorry no any products available"
        }
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
