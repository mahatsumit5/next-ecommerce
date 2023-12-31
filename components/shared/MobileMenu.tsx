import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ThemeChanger } from "./ThemeChanger";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
function MobileMenu({ setIsOpen, isOpen }: MobileMenuProps) {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="border-none dark:bg-none">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="flex gap-2 justify-between mt-3">
              <Button
                className="rounded-full w-full "
                variant="secondary"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Image
                  src={"/assets/search.svg"}
                  width={15}
                  height={15}
                  alt="logo"
                  className="rounded-image"
                  style={{}}
                />
                Search
              </Button>
              <ThemeChanger />
            </div>
          </SheetHeader>
          <div className="mt-5 flex flex-col gap-3 ">
            <div className="w-full">
              <NavigationMenuDemo />
            </div>
            <Button
              className="rounded-full border gap-2"
              variant="ghost"
              size={"default"}
            >
              <Image
                src={"/assets/cart.png"}
                width={25}
                height={25}
                alt="logo"
              />
              <Badge variant="destructive">5</Badge>
            </Button>{" "}
            <Button className="rounded-full " variant="default">
              Login
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
