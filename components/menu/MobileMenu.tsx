import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetPortal,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ThemeChanger } from "../theme-provider/ThemeChanger";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { HeaderMenu } from "./HeaderMenu";
import Link from "next/link";
import LoginButton from "../user-login/LoginButton";
type MobileMenuProps = {
  isSheetOpen: boolean;
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
};
function MobileMenu() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Sheet open={isSheetOpen}>
        <SheetTrigger asChild>
          {/* <Button
            variant="ghost"
            className=" dark:bg-none "
            onClick={() => {
              setIsSheetOpen(true);
            }}
            size={"lg"}
          > */}
          <FontAwesomeIcon
            icon={faBars}
            // bounce
            style={{ color: "#1056d1" }}
            size="lg"
            className="hover:scale-125 transition-all"
            onClick={() => {
              setIsSheetOpen(true);
            }}
          />
        </SheetTrigger>
        <SheetPortal forceMount>
          <Button>asds</Button>
        </SheetPortal>
        <SheetContent className="overflow-y-auto ">
          <SheetHeader className="flex flex-row w-full border-b-4 relative">
            <div className=" w-full relative h-[80px] ">
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
            <div className="absolute right-2 -top-5">
              <ThemeChanger />
            </div>
            <div className=" justify-end  w-1/4 absolute z-20 -top-5 -left-3 ">
              <LoginButton />
            </div>
          </SheetHeader>

          <div className="mt-5 flex flex-col gap-3 relative ">
            <HeaderMenu setIsSheetOpen={setIsSheetOpen} />
          </div>

          <SheetFooter className="mt-2 flex justify-start gap-3 ">
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
            <SheetClose asChild>
              <Button
                size={"lg"}
                variant={"default"}
                className="mt-4 rounded-lg"
                onClick={() => {
                  setIsSheetOpen(false);
                }}
              >
                Close
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
