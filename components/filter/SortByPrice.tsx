import React, { useState } from "react";
import { Button } from "../ui/button";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import ReuseableFilter from "./ReusableFilterComponent";
const SortByPrice = () => {
  const [sort, setSort] = useState<"asc" | "desc" | "">("");
  return (
    <ReuseableFilter name="sort" query={sort} key={sort}>
      <div id="search" className="w-full filter-components">
        <Button
          className="w-full border-none shadow-md "
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
