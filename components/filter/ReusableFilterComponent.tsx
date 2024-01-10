"use client";
import React, { useEffect } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const ReuseableFilter = ({
  query,
  children,
  name,
}: {
  query: string;
  children: React.ReactNode;
  name: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: name,
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: [`${name}`],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 0);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);
  return children;
};

export default ReuseableFilter;
