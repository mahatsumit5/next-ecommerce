"use client";
import React, { useState } from "react";

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
          <div className="rounded-sm  relative  h-[350px] w-[400px] sm:w-[300px] overflow-hidden ">
            <Image
              src={data.image}
              fill
              alt="category-image"
              className=" hover:scale-105 transition-all  object-cover"
              loading="lazy"
              quality={50}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <span className="flex items-center justify-center text-7xl absolute  bg-black/35 h-full w-full text-slate-200 ">
              <p className=" font-semibold  ">{data.title}</p>
            </span>
          </div>
        </div>
      </Link>
    );
  } else {
    return <div>loading</div>;
  }
}

export default CustomCard;
