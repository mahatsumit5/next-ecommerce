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
import { ThemeChanger } from "../theme-provider/ThemeChanger";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import CartDrawer from "../cart/CartDrawer";
import { ICartState } from "@/types";
import CartButton from "../cart/CartButton";
import { HeaderMenu } from "./HeaderMenu";
type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cart: ICartState[];
};
function MobileMenu({ setIsOpen, isOpen, cart }: MobileMenuProps) {
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
              <ThemeChanger />
              <CartButton cart={cart} />
            </div>
          </SheetHeader>
          <div className="mt-5 flex flex-col gap-3 ">
            <div className="w-full">
              <HeaderMenu />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
