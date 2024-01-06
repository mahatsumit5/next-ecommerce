import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { getAllCategories } from "@/lib/actions/category.actions";
import Link from "next/link";
import { ICategory } from "@/types";

function Catagory({
  query,
  setIsOpen,
}: {
  query: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
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
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {cat.title}
        </Link>
      ))}
    </span>
  );
}

export default Catagory;
