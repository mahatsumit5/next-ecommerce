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
    <Link href={data.slug}>
      <div className="h-[250px]  w-[250px] relative ">
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
