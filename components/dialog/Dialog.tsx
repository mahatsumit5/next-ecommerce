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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Dialog = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
      <AlertDialogContent className=" bg-black/50 backdrop-blur-2xl  ">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Search query={query} setQuery={setQuery} />
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-2  text-slate-100 items-start max-h-[50vh] overflow-y-auto ">
            <Products query={query} setIsOpen={setIsOpen} />
            <Catagory query={query} setIsOpen={setIsOpen} />
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
