import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { ICategory, IProduct } from "@/types";
import Image from "next/image";
import LoadingSkeleton from "./LoadingSkeleton";
import { usePathname } from "next/navigation";

function SearchDataComponent({
  type,
  data,
  setIsOpen,
  loading,
}: {
  type: "category" | "product";
  data: ICategory[] | IProduct[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
}) {
  const [currentPath, setPathname] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setPathname(pathname);
    if (!currentPath) {
      return;
    }
    setIsOpen(false);
  }, [pathname]);
  if (loading) {
    return <LoadingSkeleton />;
  } else {
    return (
      <span className="flex flex-col gap-5 items-start w-full">
        <span className="text-sm sm:text-xl uppercase">{type}</span>

        {data.map((item) => (
          <Link
            href={
              type === "category"
                ? `/category/${item.slug}`
                : `/category/item/${item.slug}`
            }
            id={item._id}
            className="flex gap-2 "
          >
            <div className="relative w-16 h-16 hover:static hover:z-40 overflow-hidden ">
              <Image
                src={(type === "category" ? item.image : item.thumbnail) || ""}
                fill
                alt="image"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {item.title}
          </Link>
        ))}
      </span>
    );
  }
}

export default SearchDataComponent;
