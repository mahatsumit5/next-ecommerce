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
const Limit = ({
  total,
  limit,
  setLimit,
}: {
  total: number;
  limit: string;
  setLimit: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ReuseableFilter name="limit" query={limit} key={"limit"}>
      <div className="w-full  rounded-md">
        {" "}
        <Select
          onValueChange={(e) => {
            if (e === "all") {
              setLimit("");
              return;
            }
            setLimit(e);
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
