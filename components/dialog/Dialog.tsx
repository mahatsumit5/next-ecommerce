import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Search from "../shared/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ICategory, IProduct } from "@/types";
import { getAllCategories } from "@/lib/actions/category.actions";
import { getSearchedProducts } from "@/lib/actions/product.actions";
import SearchDataComponent from "./SearchDataComponent";

const Dialog = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      getAllCategories(query).then((categories) => {
        setCategories(categories);
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
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild className="w-full rounded-md">
        <Button
          className="rounded-3xl  sm:shadow-lg sm:w-16 dark:bg-slate-600 "
          variant="ghost"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          size={"sm"}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="blue" />{" "}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-black/50 backdrop-blur-2xl h-[100svh]  ">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Search query={query} setQuery={setQuery} />
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-5  text-slate-100 items-start max-h-[80svh] overflow-y-auto ">
            <SearchDataComponent
              data={categories}
              type="category"
              setIsOpen={setIsOpen}
              loading={loading}
            />
            <SearchDataComponent
              data={products}
              type="product"
              setIsOpen={setIsOpen}
              loading={loading}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="w-full">
          <AlertDialogCancel
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="w-full"
          >
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
