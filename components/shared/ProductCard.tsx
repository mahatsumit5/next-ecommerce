"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
import SelectSize from "./SelectSize";
type CardProps = {
  data: IProduct;
  slug?: string;
};
function CustomProductCard({ data, slug }: CardProps) {
  const [color, setColor] = useState(data.color[0]);
  const [size, setSize] = useState("");
  return (
    <Card className=" w-[300px] xs:w-[150px] sm:w-[300px] hover:shadow-2xl transition-shadow ">
      <CardHeader>
        <CardTitle>
          <div className=" product-card relative ">
            <Image
              src={data.images[0]}
              fill
              alt="category-image"
              className="rounded-lg hover:scale-105 transition-all product-card  "
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
          <span className="flex ">
            <StarFilledIcon color="orange" />
            <StarFilledIcon color="orange" />
            <StarFilledIcon color="orange" />
            <StarIcon />
            <StarIcon />
          </span>
          <span className="flex justify-start gap-2">
            {data.color.map((c) => (
              <button
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
