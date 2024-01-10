"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Input } from "../ui/input";

import ReuseableFilter from "./ReusableFilterComponent";
import { getAllCategories } from "@/lib/actions/category.actions";
import { getSearchedProducts } from "@/lib/actions/product.actions";
import { ICategory, IProduct } from "@/types";

const Search = ({
  classname,
  setCategories,
  setProducts,
  setLoading,
  type,
}: {
  classname: string;
  setCategories?: Dispatch<SetStateAction<ICategory[]>>;
  setProducts?: Dispatch<SetStateAction<IProduct[]>>;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  type: "searchModal" | "productPage";
}) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (type === "productPage") {
      return;
    }
    async function getData() {
      setLoading && setLoading(true);
      getAllCategories({ query, skip: 0 }).then((categories) => {
        setCategories && setCategories(categories?.data as ICategory[]);
        setLoading && setLoading(false);
      });

      getSearchedProducts(query).then((result) => {
        setProducts && setProducts(result);
        setLoading && setLoading(false);
      });
    }
    const debounceFn = setTimeout(() => {
      getData();
    }, 500);

    return () => clearTimeout(debounceFn);
  }, [query]);

  return (
    <ReuseableFilter name="query" query={query}>
      <div className={classname}>
        <Input
          placeholder={"Search products or categories"}
          type={"text"}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="w-full rounded-md shadow-lg border-none filter-components "
        />
      </div>
    </ReuseableFilter>
  );
};

export default Search;
