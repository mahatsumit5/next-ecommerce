"use client";

import { useReducer } from "react";
import Search from "./Search";
import { CategoryDropdown } from "./CategoryDropDown";
import SortByPrice from "./SortByPrice";
import ResetButton from "./ResetButton";
import Limit from "./Limit";
import Size from "./Size";
import Price from "./Price";

import {
  reducerHandler,
  reducerInitialState,
} from "@/lib/reducer/filterReducer.handler";

const Filter = ({ total }: { total: number }) => {
  const [state, dispatch] = useReducer(reducerHandler, reducerInitialState);

  return (
    <div className=" grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 ">
      <Search query={state.query} dispatch={dispatch} key={"search"} />
      <CategoryDropdown
        category={state.category}
        key={"category"}
        dispatch={dispatch}
      />
      <Limit
        total={total}
        limit={state.limit}
        dispatch={dispatch}
        key={"limit"}
      />
      <Size size={state.size} dispatch={dispatch} key={"size"} />
      <Price range={state.range} dispatch={dispatch} key={"price"} />
      <SortByPrice dispatch={dispatch} sort={state.sort} key={"sort"} />
      <ResetButton dispatch={dispatch} />
    </div>
  );
};

export default Filter;
