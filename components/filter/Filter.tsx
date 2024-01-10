"use client";

import { useEffect, useState } from "react";
import Search from "./Search";
import { CategoryDropdown } from "./CategoryDropDown";
import SortByPrice from "./SortByPrice";
import ResetButton from "./ResetButton";
import Limit from "./Limit";
import Size from "./Size";
import { Button } from "../ui/button";

const Filter = ({ total }: { total: number }) => {
  const [size, setSize] = useState<string[]>([]);
  const [limit, setLimit] = useState<string>("");
  const [sort, setSort] = useState<"asc" | "desc" | "">("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [reset, setIsReset] = useState<boolean>(false);
  useEffect(() => {
    if (!reset) {
      return;
    }
    setLimit("");
    setSize([]);
    setSort("");
    setQuery("");
    setSelectedCategory("");
    setIsReset(false);
  }, [reset]);
  return (
    <div className="wrapper grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-6 ">
      <CategoryDropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        key={"category"}
      />
      <SortByPrice setSort={setSort} sort={sort} key={"sort"} />
      <Limit total={total} limit={limit} setLimit={setLimit} key={"limit"} />
      <Size setSize={setSize} size={size} key={"size"} />
      <Search query={query} setQuery={setQuery} key={"search"} />

      <ResetButton setIsReset={setIsReset} />
    </div>
  );
};

export default Filter;
