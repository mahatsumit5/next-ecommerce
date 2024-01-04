import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ThemeChanger } from "../theme-provider/ThemeChanger";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ICartState } from "@/types";
import { HeaderMenu } from "./HeaderMenu";
import Link from "next/link";
import LoginButton from "../user-login/LoginButton";
type MobileMenuProps = {
  isSheetOpen: boolean;
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
};
function MobileMenu({ isSheetOpen, setIsSheetOpen }: MobileMenuProps) {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="border-none dark:bg-none"
            onClick={() => {
              setIsSheetOpen(true);
            }}
          >
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader className="flex flex-row w-full border-b-4">
            <div className=" w-3/4 relative h-[80px] ">
              <Link
                href={"/"}
                onClick={() => {
                  setIsSheetOpen(false);
                }}
              >
                <Image
                  src={"/assets/logo.svg"}
                  fill
                  alt="logo"
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="grid items-center justify-end  w-1/4">
              <LoginButton />
            </div>
          </SheetHeader>

          <div className="mt-5 flex flex-col gap-3 relative">
            <div className="absolute right-0 -top-5">
              <ThemeChanger />
            </div>

            <HeaderMenu setIsSheetOpen={setIsSheetOpen} />
          </div>
          <SheetFooter className="mt-2 sm:justify-start w-full">
            <SheetClose asChild>
              <Link href={"/cart"}>
                <Button
                  size={"lg"}
                  variant={"default"}
                  className="mt-4 rounded-lg"
                  onClick={() => {
                    setIsSheetOpen(false);
                  }}
                >
                  View Cart
                </Button>
              </Link>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
