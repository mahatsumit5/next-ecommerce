"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { getAllCategories } from "@/lib/actions/category.actions";
import { getSearchedProducts } from "@/lib/actions/product.actions";
import { ICategory, IProduct } from "@/types";

const Search = ({
  classname,
  setCategories,
  setProducts,
  setLoading,
}: {
  classname: string;
  setCategories: Dispatch<SetStateAction<ICategory[]>>;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      getAllCategories({ query }).then((categories) => {
        setCategories(categories?.data as ICategory[]);
        setLoading(false);
      });

      getSearchedProducts(query).then((result) => {
        setProducts(result);
        setLoading(false);
      });
    }
    const debounceFn = setTimeout(() => {
      getData();
    }, 500);

    return () => clearTimeout(debounceFn);
  }, [query]);

  return (
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
  );
};

export default Search;
