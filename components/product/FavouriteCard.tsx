"use client";
import Image from "next/image";
import { FavouriteItems } from "@/types";
import Link from "next/link";

type CardProps = {
  data: FavouriteItems;
};

function FavouriteCard({ data }: CardProps) {
  return (
    <Link href={`/category/item/${data.slug}`}>
      <div className=" w-[180px] sm:w-[200px] md:w-[280px] ">
        <div className="flex flex-col gap-2  hover:underline relative ">
          <div className=" product-card relative  w-full ">
            <Image
              src={data.images[0]}
              fill
              alt="category-image"
              className="  transition-all product-card object-cover object-center "
              loading={
                data._id !== "659c6bbea9d92e9d4e7ead1d" ? "lazy" : undefined
              }
              quality={50}
              priority={data._id === "659c6bbea9d92e9d4e7ead1d"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />{" "}
          </div>
          <h5 className="scroll-m-20 text-sm sm:text-lg  font-semibold tracking-tight line-clamp-1">
            {data.title}
          </h5>
          <h5 className="scroll-m-20 text-sm   font-semibold   text-muted-foreground">
            {data.title}
          </h5>

          <span className="font-bold flex justify-between">
            <p>${data.price}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FavouriteCard;
