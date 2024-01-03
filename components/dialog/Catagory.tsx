import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { getAllCategories } from "@/lib/actions/category.actions";
import Link from "next/link";
import { ICategory } from "@/types";

function Catagory({ query }: { query: string }) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    async function getData() {
      const categories = await getAllCategories(query);
      setCategories(categories);
    }
    const debounceFn = setTimeout(() => {
      getData();
    }, 800);

    return () => clearTimeout(debounceFn);
  }, [query]);

  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <h3 className="text-2xl">Categories</h3>

      <Separator />

      {categories.map((cat) => (
        <Link href={`/category/${cat.slug}`}>
          <p className="text-sm sm:text-md hover:underline hover:cursor-pointer">
            {cat.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Catagory;
