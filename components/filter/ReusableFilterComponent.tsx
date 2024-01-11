"use client";
import React, { useEffect } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import _debounce from "lodash/debounce";
const ReuseableFilter = ({
  query,
  children,
  name,
  key,
}: {
  key: string;
  query: string;
  children: React.ReactNode;
  name: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const delayDebounceFn = _debounce(() => {
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
  }, 500);
  useEffect(() => {
    delayDebounceFn();
    return delayDebounceFn.cancel;
  }, [query, searchParams, router]);
  return <div key={key}>{children}</div>;
};

export default ReuseableFilter;
