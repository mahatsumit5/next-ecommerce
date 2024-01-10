import React, { Dispatch, useState } from "react";
import { Button } from "../ui/button";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import ReuseableFilter from "./ReusableFilterComponent";
const SortByPrice = ({
  sort,
  setSort,
}: {
  sort: string;
  setSort: Dispatch<React.SetStateAction<"asc" | "desc" | "">>;
}) => {
  return (
    <ReuseableFilter name="sort" query={sort} key={"sort"}>
      <div
        id="search"
        className="w-full filter-components rounded-md dark:bg-slate-700/25"
      >
        <Button
          className="w-full border-none shadow-md  filter-components  dark:bg-slate-700/25"
          variant={"outline"}
          onClick={() => {
            if (sort === "desc") {
              setSort("asc");
            } else {
              setSort("desc");
            }
          }}
        >
          <p className="text-md">{sort || "Price"}</p>
          <p className="text-xl">
            {sort === "asc" ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </p>
        </Button>
      </div>
    </ReuseableFilter>
  );
};

export default SortByPrice;
