import React, { Dispatch, SetStateAction, useState } from "react";
import ReuseableFilter from "./ReusableFilterComponent";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReducerDispatch } from "@/types";
import { ACTIONS } from "@/lib/constants";
const Limit = ({
  total,
  limit,
  dispatch,
}: {
  total: number;
  limit: string;
  dispatch: Dispatch<ReducerDispatch>;
}) => {
  return (
    <ReuseableFilter name="limit" query={limit} key={"limit"}>
      <div className="w-full  rounded-md">
        {" "}
        <Select
          onValueChange={(e) => {
            if (e === "all") {
              dispatch({ payload: "", type: ACTIONS.LIMIT });
              return;
            }
            dispatch({ payload: e, type: ACTIONS.LIMIT });
          }}
          value={limit}
        >
          <SelectTrigger className="w-full border-none shadow-md filter-components dark:bg-slate-700/25">
            <SelectValue placeholder="Limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={"all"}>All</SelectItem>
              {Array(total > 8 ? 8 : total)
                .fill("")
                .map((item, index) => (
                  <SelectItem value={index + 1 + ""} key={index}>
                    {index + 1}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </ReuseableFilter>
  );
};

export default Limit;
