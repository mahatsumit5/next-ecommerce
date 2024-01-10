"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";

import ReuseableFilter from "./ReusableFilterComponent";

const Search = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ReuseableFilter name="slug" query={query} key={"query"}>
      <div className={"w-full"}>
        <Input
          placeholder={"Search products or categories"}
          type={"text"}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          className="w-full rounded-md shadow-lg border-none filter-components dark:bg-slate-700/25"
        />
      </div>
    </ReuseableFilter>
  );
};

export default Search;
