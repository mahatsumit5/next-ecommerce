import { ICategory, IProduct } from "@/types";
import React from "react";
import CustomCard from "./Card";
import CustomProductCard from "../product/ProductCard";
type CollectionProps = {
  data: ICategory[] | IProduct[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectiontype: "Categories" | "Products";
  slug?: string;
};
function Collection({
  data,
  emptyTitle,
  emptyStateSubtext,
  slug,
  collectiontype,
}: CollectionProps) {
  return (
    <>
      {data?.length > 0 ? (
        <>
          <div
            className={`grid  ${
              collectiontype === "Categories"
                ? "gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 "
                : "gap-5  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4   "
            }   justify-items-center    `}
          >
            {data.map((data) => {
              if (collectiontype === "Products") {
                return (
                  <CustomProductCard
                    key={data._id}
                    data={data as IProduct}
                    slug={slug}
                  />
                );
              }
              return <CustomCard key={data._id} data={data as ICategory} />;
            })}
          </div>
        </>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[140px] bg-grey-50 py-28 text-left">
          <h3 className="p-bold-20 md:h5-bold ">{emptyTitle}</h3>
          <p className="p-regular-14 text-gray-400">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
}

export default Collection;
