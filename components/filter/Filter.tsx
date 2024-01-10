"use client";

import { useState } from "react";
import Search from "./Search";
import { CategoryDropdown } from "./CategoryDropDown";
import SortByPrice from "./SortByPrice";
import ResetButton from "./ResetButton";
import Limit from "./Limit";
import Size from "./Size";

const Filter = ({ total }: { total: number }) => {
  const [size, setSize] = useState<string[]>([]);
  const [limit, setLimit] = useState<string>("");
  const [sort, setSort] = useState<"asc" | "desc" | "">("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const clearFilerOnReset = () => {
    setLimit("");
    setSize([]);
    setSort("");
    setQuery("");
    setSelectedCategory("");
  };
  return (
    <div className="wrapper grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 ">
      <Search query={query} setQuery={setQuery} key={"search"} />
      <CategoryDropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        key={"category"}
      />
      <SortByPrice setSort={setSort} sort={sort} key={"sort"} />
      <Limit total={total} limit={limit} setLimit={setLimit} key={"limit"} />
      <Size setSize={setSize} size={size} key={"size"} />
      <ResetButton clearFilerOnReset={clearFilerOnReset} />
    </div>
  );
};

export default Filter;
