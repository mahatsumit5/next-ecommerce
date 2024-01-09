"use client";
import {
  getAllProducts,
  getSearchedProducts,
} from "@/lib/actions/product.actions";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

function Products({
  query,
  setIsOpen,
}: {
  query: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getSearchedProducts(query);
      setProducts(result);
    };
    const debounceFn = setTimeout(() => {
      fetchData();
    }, 800);
    return () => clearTimeout(debounceFn);
  }, [query]);
  return (
    <span className="flex flex-col gap-3 items-start w-full">
      <span className="text-2xl">Products</span>

      {products?.map((product) => (
        <Link
          href={`/category/item/${product.slug}`}
          id={product._id}
          onClick={() => {
            setIsOpen(false);
          }}
          className="flex gap-2 "
        >
          <div className="relative w-10 h-10 hover:static hover:z-40 overflow-hidden">
            <Image
              src={product.thumbnail}
              fill
              alt="image"
              className="object-cover"
            />
          </div>

          {product.title}
        </Link>
      ))}
    </span>
  );
}

export default Products;
