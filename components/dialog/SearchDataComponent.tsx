import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { ICategory, IProduct } from "@/types";
import Image from "next/image";
import LoadingSkeleton from "./LoadingSkeleton";

function SearchDataComponent({
  type,
  data,
  setIsOpen,
  loading,
}: {
  type: "category" | "product";
  data: ICategory[] | IProduct[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
}) {
  if (loading) {
    return <LoadingSkeleton />;
  } else {
    return (
      <span className="flex flex-col gap-5 items-start w-full">
        <span className="text-sm sm:text-xl uppercase">{type}</span>

        {data.map((item) => (
          <Link
            href={
              type === "category"
                ? `/category/${item.slug}`
                : `/category/item/${item.slug}`
            }
            id={item._id}
            onClick={() => {
              setIsOpen(false);
            }}
            className="flex gap-2 "
          >
            <div className="relative w-10 h-10 hover:static hover:z-40 overflow-hidden ">
              <Image
                src={(type === "category" ? item.image : item.thumbnail) || ""}
                fill
                alt="image"
                className="object-cover"
              />
            </div>

            {item.title}
          </Link>
        ))}
      </span>
    );
  }
}

export default SearchDataComponent;
