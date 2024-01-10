"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Input } from "../ui/input";
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
    }, 50);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);
  return children;
};

export default ReuseableFilter;
