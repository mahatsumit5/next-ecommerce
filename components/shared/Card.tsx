"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { ICategory, IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
type CardProps = {
  data: ICategory;
};
function CustomCard({ data }: CardProps) {
  return (
    <Link href={`/category/${data.slug}`}>
      <div className="h-[150px]  w-[150px] relative sm:h-[250px] md:w-[250px] ">
        <Image
          src={data.image}
          fill
          alt="category-image"
          className=" hover:scale-105 transition-all  "
        />
        <p className="absolute -bottom-8 font-semibold  text-xl">
          {data.title}
        </p>
      </div>
    </Link>
  );
}

export default CustomCard;
