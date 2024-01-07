"use client";
import { IProduct } from "@/types";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import AddToCart from "../cart/AddToCart";
import SelectSize from "./SelectSize";
import ProductTabs from "./Tabs";
import SelectQuantity from "./SelectQuantity";
import { IReview } from "@/lib/database/models/review.model";

function ProductDescription({
  product,
  reviews,
}: {
  product: IProduct;
  reviews: IReview[];
}) {
  const [size, setSize] = useState("");
  const [color, setColor] = useState(product.color[0]);
  const [orderQty, setOrderQty] = useState(0);
  return (
    <div className="  flex flex-col gap-4 ">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        {product.title}
      </h1>
      <p className="mb-6 text-base text-gray-500 dark:text-gray-400 underline uppercase">
        {reviews.length} Reviews
      </p>
      <p className="font-extrabold text-3xl text-red-600">${product.price}</p>
      <Separator />
      <p className="font-semibold">Color</p>
      <span className="flex justify-start gap-5">
        {product.color.map((c, index) => (
          <button
            key={index}
            className={`w-7 rounded-full h-7 ${
              color === c && "scale-125 shadow-xl border-zinc-600"
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
      <Separator />

      <span className="flex flex-row gap-5 justify-between">
        <p className="font-semibold">Size</p>
        <SelectSize sizes={product.size} setSize={setSize} width="w-[180px]" />
      </span>
      <Separator />
      <span className="flex justify-between">
        <p className="font-semibold">Qty</p>
        <SelectQuantity qty={product.qty} setOrderQty={setOrderQty} />
      </span>
      <div className="flex gap-3 flex-wrap">
        <AddToCart
          product={product}
          variant={"destructive"}
          size={size}
          color={color}
          orderQuantity={orderQty}
        />
        <Button variant={"outline"} className="uppercase" size={"lg"}>
          <SewingPinFilledIcon color="red" />
          find in store
        </Button>
      </div>
      <span className="font-bold">Product Details</span>
      <Separator />
      <ProductTabs
        productId={product._id}
        description={product.description}
        review={reviews}
      />
    </div>
  );
}

export default ProductDescription;
