"use client";
import { IProduct, review } from "@/types";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import AddToCart from "./AddToCart";
import SelectSize from "./SelectSize";
import ProductTabs from "./Tabs";

function ProductDescription({ product }: { product: IProduct }) {
  const [size, setSize] = useState("");
  const [color, setColor] = useState(product.color[0]);
  console.log(typeof product.reviews);
  return (
    <div className="  flex flex-col gap-4 ">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        {product.title}
      </h1>
      <p className="mb-6 text-base text-gray-500 dark:text-gray-400 underline uppercase">
        {product.reviews.length} Reviews
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

      <span className="flex flex-col sm:flex-row gap-5 justify-between">
        <p className="font-semibold">Size</p>
        <SelectSize sizes={product.size} setSize={setSize} width="w-[300px]" />
      </span>
      <Separator />
      <p className="font-semibold">Qty</p>
      <div className="flex gap-3 flex-wrap">
        <AddToCart
          product={product}
          variant={"destructive"}
          size={size}
          color={color}
        />
        <Button variant={"outline"} className="uppercase">
          <SewingPinFilledIcon color="red" />
          find in store
        </Button>
      </div>
      <span className="font-bold">Product Details</span>
      <Separator />
      <ProductTabs
        description={product.description}
        review={product.reviews as review[]}
      />
    </div>
  );
}

export default ProductDescription;
