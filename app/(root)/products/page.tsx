import Filter from "@/components/filter/Filter";
import MobileFilterAccordian from "@/components/filter/MobileFilterAccordian";
import Collection from "@/components/shared/Collection";
import { ProductPagination } from "@/components/shared/Pagination";
import { getAllProducts } from "@/lib/actions/product.actions";
import { IProduct, SearchParamProps, SizeArray } from "@/types";
import React from "react";

async function page({ searchParams }: SearchParamProps) {
  const query = (searchParams?.slug as string) || "";
  const page = (searchParams?.page as string) || 1;
  const priceRange = (searchParams?.price_range as string) || "0-Infinity";
  const rangeAray = priceRange.split("-");
  const sort = (searchParams?.sort as "asc" | "desc") || "asc";
  const category = (searchParams?.category as string) || "";
  const limit = (searchParams?.limit as string) || 8;
  const size = (searchParams?.size as string)?.split(",") || [
    "xs",
    "lg",
    "md",
    "sm",
    "xl",
  ];
  const data = await getAllProducts({
    limit: Number(limit),
    query,
    page: Number(page),
    sort: sort,
    category,
    size: size as SizeArray,
    gte: Number(rangeAray[0]),
    lte: Number(rangeAray[1]),
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="hidden sm:block">
        <Filter total={data?.totalProducts as number} />
      </div>
      <div className="block sm:hidden">
        <MobileFilterAccordian>
          <Filter total={data?.totalProducts as number} />
        </MobileFilterAccordian>
      </div>
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
