import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { getAllCategories } from "@/lib/actions/category.actions";
import Link from "next/link";
import { ICategory } from "@/types";
import Image from "next/image";

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
          id={cat._id}
          onClick={() => {
            setIsOpen(false);
          }}
          className="flex gap-2 "
        >
          <div className="relative w-10 h-10 hover:static hover:z-40 overflow-hidden ">
            <Image src={cat.image} fill alt="image" className="object-cover" />
          </div>

          {cat.title}
        </Link>
      ))}
    </span>
  );
}

export default Catagory;
