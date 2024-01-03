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

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const Dialog = ({ setIsOpen, isOpen }: MobileMenuProps) => {
  const [query, setQuery] = useState("");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="">
        <Button
          className="rounded-3xl hover:border "
          variant="link"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MagnifyingGlassIcon className="mr-2 h-5 w-8" color="blue" />{" "}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-black/50 backdrop-blur-lg min-h-screen overflow-y-auto ">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Search query={query} setQuery={setQuery} />
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-2  text-slate-100 items-start">
            <Catagory query={query} />

            {/* <Products query={query} /> */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              setQuery("");
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
