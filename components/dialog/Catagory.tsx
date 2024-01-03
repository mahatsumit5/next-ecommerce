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
    <span className="flex flex-col gap-3 items-start w-full">
      <span className="text-2xl">Categories</span>

      {categories.map((cat) => (
        <Link
          href={`/category/${cat.slug}`}
          key={cat._id}
          className="text-sm hover:underline"
        >
          {cat.title}
        </Link>
      ))}
    </span>
  );
}

export default Catagory;
