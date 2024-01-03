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
import { Separator } from "@radix-ui/react-separator";
type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cart: ICartState[];
};
function MobileMenu({ setIsOpen, isOpen, cart }: MobileMenuProps) {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="border-none dark:bg-none">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex w-[80px]">
            <CartButton cart={cart} />
          </SheetHeader>
          <div className="border-b-2 border-r-slate-950"></div>
          <div className="mt-5 flex flex-col gap-3 ">
            <HeaderMenu />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
