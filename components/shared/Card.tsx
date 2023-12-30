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
  const [toggle, setToggle] = useState(false);
  return (
    <Link href={data.slug}>
      <div
        className="h-[150px] relative"
        onMouseEnter={(e) => {
          setToggle(true);
        }}
        onMouseLeave={(e) => {
          setToggle(false);
        }}
      >
        <Image
          src={data.image}
          width={200}
          height={200}
          alt="category-image"
          className="rounded-lg hover:scale-105 hover:blur transition-all h-[150px] "
        />
        <Button
          className={`absolute top-14  left-14 transition-all ${
            toggle ? "" : "opacity-0"
          }`}
          variant={"outline"}
        >
          {data.title}
        </Button>
      </div>
    </Link>
  );
}

export default CustomCard;
