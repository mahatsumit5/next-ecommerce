"use client";
import {
  getAllProducts,
  getSearchedProducts,
} from "@/lib/actions/product.actions";
import { IProduct } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Products({ query }: { query: string }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getSearchedProducts("trainers");
      console.log(result);

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
        <Link href={`/category/item/${product.slug}`} key={product._id}>
          {product.title}
        </Link>
      ))}
    </span>
  );
}

export default Products;
