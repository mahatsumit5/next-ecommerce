"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../cart/AddToCart";
import SelectSize from "./SelectSize";
import { getReviews } from "@/lib/actions/review.actions";
import { IReview } from "@/lib/database/models/review.model";
import { calculateTypeOfStars, countProductRating } from "@/lib/utils";
import StarRating from "./StarRating";
import { Skeleton } from "../ui/skeleton";

type CardProps = {
  data: IProduct;
  slug?: string;
};

function CustomProductCard({ data, slug }: CardProps) {
  let stars = {
    fullStar: 0,
    halfStar: 0,
    emptyStar: 5,
  };
  const [color, setColor] = useState(data.color[0]);
  const [size, setSize] = useState("");
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
    <Card className=" w-[300px] sm:w-[300px] hover:shadow-2xl transition-shadow ">
      <CardHeader>
        <CardTitle>
          <div className=" product-card relative  overflow-hidden">
            <Image
              src={data.images[0]}
              fill
              alt="category-image"
              className="rounded-lg hover:scale-105 transition-all product-card object-cover "
              loading="lazy"
            />{" "}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 ">
        <h5 className="scroll-m-20 text-sm sm:text-xl md:text-2xl font-semibold tracking-tight line-clamp-1">
          {data.title}
        </h5>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
          {data.description}
        </p>
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

          <span className="flex justify-start gap-2">
            {data.color.map((c, index) => (
              <button
                key={index}
                className={`w-5 rounded-full h-5 ${
                  color === c && "scale-125 shadow-xl border-solid"
                }`}
                style={{
                  backgroundColor: c,
                }}
                onClick={() => {
                  setColor(c);
                }}
              />
            ))}
          </span>
        </div>
        <span className="flex justify-between">
          <p className=" text font-bold text-red-600">${data.price}</p>
          <SelectSize sizes={data.size} setSize={setSize} width="w-[150px]" />
        </span>
        <div className="flex flex-wrap justify-between gap-2">
          <AddToCart
            variant="primary"
            product={data}
            color={color}
            size={size}
          />
          <Link href={`/category/${slug}/${data.slug}`}>
            <Button size={"lg"} variant={"outline"} className="w-25">
              View
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default CustomProductCard;
