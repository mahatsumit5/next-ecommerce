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
import { Input } from "../ui/input";
import Search from "../shared/Search";
type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const Dialog = ({ setIsOpen, isOpen }: MobileMenuProps) => {
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
      <AlertDialogContent className="fixed top-20">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <Search />
          </AlertDialogTitle>
          {/* <AlertDialogDescription>aksjdbfjkbf</AlertDialogDescription> */}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
