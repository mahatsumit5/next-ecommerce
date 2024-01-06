import React, { Dispatch, SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Search from "../shared/Search";
import Catagory from "./Catagory";
import Products from "./Products";

const Dialog = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild className="w-full">
        <Button
          className="rounded-3xl  sm:shadow-lg sm:w-16 dark:bg-slate-600 "
          variant="ghost"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          size={"sm"}
        >
          <MagnifyingGlassIcon className="" color="blue" />{" "}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-black/30 backdrop-blur-md   overflow-y-auto ">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Search query={query} setQuery={setQuery} />
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-2  text-slate-100 items-start">
            {/* <Catagory query={query} setIsOpen={setIsOpen} /> */}

            <Products query={query} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
          >
            Cancel
          </AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
