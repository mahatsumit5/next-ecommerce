import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const priceFilter = [
  {
    label: "Up to $50",
    range: "0-50",
  },

  {
    label: "$50 to $100",
    range: "50-100",
  },
  {
    label: "$100 to $200",
    range: "100-200",
  },
  {
    label: "$200 to $500",
    range: "200-500",
  },
  {
    label: "$500 &&  above",

    range: "500-Infinity",
  },
];
const Price = ({
  range,
  setRange,
}: {
  range: string;
  setRange: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (range) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "price_range",
          value: range.toString(),
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: [`price_range`],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [range, searchParams, router]);

  return (
    <div>
      <Select
        onValueChange={(e) => {
          setRange(e);
        }}
      >
        <SelectTrigger className="w-full border-none shadow-md filter-components dark:bg-slate-700/25 ">
          <SelectValue placeholder="Select Price range" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Available Categories</SelectLabel>
            {priceFilter.map((item, index) => (
              <SelectItem value={item.range} key={item.label}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Price;
