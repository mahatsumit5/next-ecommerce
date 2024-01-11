"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { getReviews } from "@/lib/actions/review.actions";
import { IReview } from "@/lib/database/models/review.model";
import { calculateTypeOfStars, countProductRating } from "@/lib/utils";
import StarRating from "./StarRating";
import { Skeleton } from "../ui/skeleton";
import { CiHeart } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import { InterfaceProduct } from "@/lib/database/models/product.models";
type CardProps = {
  data: InterfaceProduct;
  slug?: string;
};

function CustomProductCard({ data, slug }: CardProps) {
  let stars = {
    fullStar: 0,
    halfStar: 0,
    emptyStar: 5,
  };

  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<{ reviews: IReview[]; count: number }>(
    { count: 0, reviews: [] }
  );
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const pending = getReviews(data._id);
      const result = await pending;
      if (result?.count) setReviews(result);
      setLoading(false);
    }
    getData();
  }, [data]);
  const rating = countProductRating(reviews.reviews) / reviews.count;
  stars = calculateTypeOfStars(rating || 0);

  return (
    <Link href={`/category/${slug}/${data.slug}`}>
      <div className=" w-[180px] sm:w-[200px] md:w-[280px]  ">
        <div className="flex flex-col gap-2  hover:underline relative ">
          <div className=" product-card relative  w-full ">
            <Image
              src={data.images[0]}
              fill
              alt="category-image"
              className="  transition-all product-card object-cover object-center "
              loading="lazy"
            />{" "}
          </div>
          <Button
            type="button"
            variant={"outline"}
            size={"icon"}
            className="absolute right-2 top-1 bg-slate-50/10 border-none text-3xl dark:bg-slate-50/10 text-red-500 rounded-full dark:hover:bg-red-700
            "
          >
            <CiHeart />
          </Button>
          <h5 className="scroll-m-20 text-sm sm:text-lg  font-semibold tracking-tight line-clamp-1">
            {data.title}
          </h5>
          <h5 className="scroll-m-20 text-sm   font-semibold   text-muted-foreground">
            {data.category.title}
          </h5>

          <div className="flex justify-between">
            {loading ? (
              <span className="flex gap-1">
                <Skeleton className="w-[20px] rounded-full" />
                <Skeleton className="w-[20px] rounded-full" />
                <Skeleton className="w-[20px] rounded-full" />
                <Skeleton className="w-[20px] rounded-full" />
                <Skeleton className="w-[20px] rounded-full" />
              </span>
            ) : (
              <span className="flex ">
                <>
                  <StarRating number={stars?.fullStar} type="filled" />
                  <StarRating number={stars?.halfStar} type="half" />
                  <StarRating number={stars?.emptyStar} type="empty" />
                </>
              </span>
            )}
          </div>
          <span className="font-bold flex justify-between">
            <p>${data.price}</p>

            <Link href={`/category/${slug}/${data.slug}`} className="text-xl">
              <BiLinkExternal />
            </Link>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CustomProductCard;
