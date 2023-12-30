import ImageCarousel from "@/components/shared/ImageCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductsBySlug } from "@/lib/actions/product.actions";
import { IProduct, ProductPageParams } from "@/types";
import React from "react";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
async function page({ params: { productSlug } }: ProductPageParams) {
  const product: IProduct = await getProductsBySlug(productSlug);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className=" border-b-4">
        <ImageCarousel images={product.images} />
      </div>
      <div className="  flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {product.title}
        </h1>
        <p className="mb-6 text-base text-gray-500 dark:text-gray-400 underline uppercase">
          {product.reviews.length} Reviews
        </p>
        <p className="font-extrabold text-3xl text-red-600">$99.99</p>
        <Separator />
        <p className="font-semibold">Color</p>
        <span className="flex justify-start gap-5">
          {product.color.map((color) => (
            <p
              className="border w-9 rounded-full h-9 bg"
              style={{
                backgroundColor: color,
              }}
            ></p>
          ))}
        </span>
        <Separator />
        <p className="font-semibold">Size</p>
        <span className="flex gap-5 justify-start">
          {product.size.map((size) => (
            <p className="border w-10 h-10 p-2 text-center uppercase font-medium rounded-sm">
              {size}
            </p>
          ))}
        </span>{" "}
        <Separator />
        <p className="font-semibold">Qty</p>
        <div className="flex gap-3 flex-wrap">
          <Button variant={"destructive"} className="uppercase">
            add to cart
          </Button>
          <Button variant={"outline"} className="uppercase">
            <SewingPinFilledIcon color="red" />
            find in store
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
