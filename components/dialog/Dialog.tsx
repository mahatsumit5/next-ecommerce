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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ICategory, IProduct } from "@/types";

import SearchDataComponent from "./SearchDataComponent";
import Search from "./Search";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild className="w-full rounded-md">
        <Button
          className="rounded-3xl  w-8  sm:w-16  sm:shadow-lg sm:dark:bg-slate-600 hover:scale-125 transition-all "
          variant="link"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          size={"sm"}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="blue"
            className="dark:text-cyan-400 text-md"
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-black/50 backdrop-blur-2xl h-[100svh]  w-[97svw] ">
        <AlertDialogHeader className=" h-1/7">
          <AlertDialogTitle>
            <Search
              classname="flex"
              setCategories={setCategories}
              setLoading={setLoading}
              setProducts={setProducts}
            />
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="flex flex-col gap-5  text-slate-100 items-start h-5/7 overflow-y-auto ">
          <SearchDataComponent
            data={products}
            type="product"
            setIsOpen={setIsOpen}
            loading={loading}
          />{" "}
          <SearchDataComponent
            data={categories}
            type="category"
            setIsOpen={setIsOpen}
            loading={loading}
          />
        </AlertDialogDescription>
        <AlertDialogFooter className="w-full h-1/7  ">
          <AlertDialogCancel
            className="w-full"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
