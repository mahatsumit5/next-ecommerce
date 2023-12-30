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

import { ICategory, IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
type CardProps = {
  data: ICategory;
};
function CustomCard({ data }: CardProps) {
  return (
    <Link href={data.slug}>
      <Card className="w-[300px] hover:shadow-2xl transition-shadow">
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] ">
            <Image
              src={data.image}
              width={350}
              height={200}
              alt="category-image"
              className="rounded-lg hover:scale-105 transition-all h-[200px] "
            />{" "}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CustomCard;
