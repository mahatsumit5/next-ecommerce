"use client";

import { useState } from "react";
import Search from "./Search";
import { CategoryDropdown } from "./CategoryDropDown";
import SortByPrice from "./SortByPrice";
import ResetButton from "./ResetButton";
import Limit from "./Limit";

const Filter = ({ total }: { total: number }) => {
  return (
    <div className="wrapper grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 ">
      <Search classname="w-full" type="productPage" />
      <CategoryDropdown />
      <SortByPrice />
      <Limit total={total} />
      <ResetButton />
    </div>
  );
};

export default Filter;
