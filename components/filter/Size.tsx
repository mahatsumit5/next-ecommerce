import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReuseableFilter from "./ReusableFilterComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
const avialbleSizes = ["xs", "sm", "md", "lg", "xl"];
const Size = ({
  size,
  setSize,
}: {
  size: string[];
  setSize: Dispatch<SetStateAction<string[]>>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (size.length) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "size",
          value: size.toString(),
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: [`size`],
        });
      }

      router.push(newUrl, { scroll: false });
    });

    return () => clearTimeout(delayDebounceFn);
  }, [size, searchParams, router]);

  function handleSetSize(selected: string, e: boolean) {
    if (e) {
      setSize([...size, selected]);
    } else {
      setSize(size.filter((s) => s !== selected));
    }
  }
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full border-none shadow-md filter-components dark:bg-slate-700/25 ">
          <SelectValue placeholder={"size"} />
        </SelectTrigger>
        <SelectContent>
          {avialbleSizes.map((s) => {
            return (
              <span className="flex items-center gap-5 mt-2" key={s}>
                <Checkbox
                  id={s}
                  onCheckedChange={(e) => {
                    handleSetSize(s, e as boolean);
                  }}
                  checked={size.includes(s)}
                  value={s}
                />
                <Label htmlFor={s} className="w-full">
                  {s}
                </Label>
              </span>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Size;
