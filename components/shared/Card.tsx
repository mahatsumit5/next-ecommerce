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
  if (data) {
    return (
      <Link href={`/category/${data.slug}`}>
        <div>
          <div className="h-[100px] rounded-2xl w-[100px] relative sm:h-[250px] md:w-[250px] overflow-hidden ">
            <Image
              src={data.image}
              fill
              alt="category-image"
              className=" hover:scale-105 transition-all  object-cover"
              loading="lazy"
            />
          </div>{" "}
          <p className=" font-semibold  text-md sm:text-xl">{data.title}</p>
        </div>
      </Link>
    );
  } else {
    return <div>loading</div>;
  }
}

export default CustomCard;
