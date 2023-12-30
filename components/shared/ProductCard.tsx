import React from "react";
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
type CardProps = {
  data: IProduct;
  slug?: string;
};
function CustomProductCard({ data, slug }: CardProps) {
  return (
    <Link href={`${slug}/${data.slug}`}>
      <Card className="w-[300px] hover:shadow-2xl transition-shadow">
        <CardHeader>
          <CardTitle>
            <div className="h-[200px] ">
              <Image
                src={data.images[0]}
                width={300}
                height={200}
                alt="category-image"
                className="rounded-lg hover:scale-105 transition-all h-[200px] "
              />{" "}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 ">
          <h5 className="scroll-m-20 text-xl font-semibold tracking-tight line-clamp-1">
            {data.title}
          </h5>
          <p className="text-sm text-muted-foreground line-clamp-2 h-10">
            {data.description}
          </p>
          <span className="flex ">
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarIcon />
            <StarIcon />
          </span>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center font-bold">
            ${data.price}
          </p>
          <div className="grid">
            <Button size={"lg"} variant={"primary"}>
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CustomProductCard;
