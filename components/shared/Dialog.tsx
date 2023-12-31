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
type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const Dialog = ({ setIsOpen, isOpen }: MobileMenuProps) => {
  const [query, setQuery] = useState("");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="rounded-full "
          variant="outline"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MagnifyingGlassIcon className="mr-2 h-4 w-4" color="blue" />{" "}
          Search...
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex-1">
              <Input
                placeholder={"Search Your Products"}
                type={"text"}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="w-full rounded-full shadow-lg border "
              />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>aksjdbfjkbf</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
