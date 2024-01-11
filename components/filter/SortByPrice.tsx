import React, { Dispatch, useState } from "react";
import { Button } from "../ui/button";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import ReuseableFilter from "./ReusableFilterComponent";
import { ReducerDispatch } from "@/types";
import { ACTIONS } from "@/lib/constants";
const SortByPrice = ({
  sort,
  dispatch,
}: {
  sort: string;
  dispatch: Dispatch<ReducerDispatch>;
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
            dispatch({ payload: "desc", type: ACTIONS.SORT });

            switch (sort) {
              case "asc": {
                return dispatch({ payload: "desc", type: ACTIONS.SORT });
              }
              case "desc": {
                return dispatch({ payload: "asc", type: ACTIONS.SORT });
              }
              default: {
                dispatch({ payload: "asc", type: ACTIONS.SORT });
              }
            }
          }}
        >
          <p className="text-md">{sort || "Sort by price"}</p>
          <p className="text-xl">
            {sort === "asc" ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </p>
        </Button>
      </div>
    </ReuseableFilter>
  );
};

export default SortByPrice;
