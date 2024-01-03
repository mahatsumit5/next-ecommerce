import { getAllProducts } from "@/lib/actions/product.actions";
import { IProduct } from "@/types";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Products({ query }: { query: string }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    async function getData() {
      const products = await getAllProducts({ query, limit: 5, page: 1 });
      setProducts(products?.data);
    }
    const debounceFn = setTimeout(() => {
      getData();
    }, 800);

    return () => clearTimeout(debounceFn);
  }, [query]);

  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <h3 className="text-2xl">Products</h3>

      <Separator />

      {products?.map((product) => (
        <Link href={`/category/item/${product.slug}`}>
          <p className="text-sm sm:text-md hover:underline hover:cursor-pointer">
            {product.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Products;
