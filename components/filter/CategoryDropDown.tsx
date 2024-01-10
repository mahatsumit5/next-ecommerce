import * as React from "react";
import { useEffect, useState } from "react";
import { ICategory } from "@/types";
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

export function CategoryDropdown() {
  const [categories, setCategoreis] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  useEffect(() => {
    async function getData() {
      const result = await getAllCategories({ query: "", skip: 0 });
      result?.data && setCategoreis(result.data);
    }
    getData();
  }, []);

  return (
    <ReuseableFilter
      query={selectedCategory}
      name="category"
      key={selectedCategory}
    >
      <div id="search" className="w-full ">
        <Select
          onValueChange={(e) => {
            setSelectedCategory(e);
          }}
        >
          <SelectTrigger className="w-full border-none shadow-md filter-components ">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Available Categories</SelectLabel>
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
