"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import ReuseableFilter from "./ReusableFilterComponent";
import { ACTIONS } from "@/lib/constants";
import { ReducerDispatch } from "@/types";

const Search = ({
  query,
  dispatch,
}: {
  query: string;
  dispatch: Dispatch<ReducerDispatch>;
}) => {
  return (
    <ReuseableFilter name="slug" query={query} key={"query"}>
      <div className={"w-full"}>
        <Input
          placeholder={"Search products or categories"}
          type={"text"}
          onChange={(e) => {
            dispatch({ payload: e.target.value, type: ACTIONS.QUERY });
          }}
          value={query}
          className="w-full rounded-md shadow-lg border-none filter-components dark:bg-slate-700/25"
        />
      </div>
    </ReuseableFilter>
  );
};

export default Search;
