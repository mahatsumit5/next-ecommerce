import * as React from "react";
import { useEffect, useState } from "react";
import { ICategory, ReducerDispatch } from "@/types";
import { getAllCategories } from "@/lib/actions/category.actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReuseableFilter from "./ReusableFilterComponent";
import { ACTIONS } from "@/lib/constants";

export function CategoryDropdown({
  category,
  dispatch,
}: {
  category: string;
  dispatch: React.Dispatch<ReducerDispatch>;
}) {
  const [categories, setCategoreis] = useState<ICategory[]>([]);
  useEffect(() => {
    async function getData() {
      const result = await getAllCategories({ query: "", skip: 0 });
      result?.data && setCategoreis(result.data);
    }
    getData();
  }, []);

  return (
    <ReuseableFilter query={category} name="category" key={"category"}>
      <div id="search" className="w-full ">
        <Select
          onValueChange={(e) => {
            if (e === "all") {
              dispatch({ payload: "", type: ACTIONS.CATEGORY });
              return;
            }
            dispatch({ payload: e, type: ACTIONS.CATEGORY });
          }}
          value={category}
        >
          <SelectTrigger className="w-full border-none shadow-md filter-components dark:bg-slate-700/25 ">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Available Categories</SelectLabel>
              <SelectItem value={"all"}>All</SelectItem>
              {categories.map((cat) => (
                <SelectItem value={cat.slug} key={cat._id}>
                  {cat.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
      </div>
    </ReuseableFilter>
  );
}
