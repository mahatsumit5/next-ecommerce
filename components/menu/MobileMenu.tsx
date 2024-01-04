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
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoginButton from "../user-login/LoginButton";
type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cart: ICartState[];
};
function MobileMenu({ setIsOpen, isOpen, cart }: MobileMenuProps) {
  const router = useRouter();
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="border-none dark:bg-none">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader className="flex flex-row w-full border-b-4">
            <div className=" w-3/4 relative h-[80px] ">
              <Link href={"/"}>
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

            <HeaderMenu />
          </div>
          <SheetFooter className="mt-2 sm:justify-start w-full">
            <SheetClose asChild>
              <Link href={"/cart"}>
                <Button
                  size={"lg"}
                  variant={"default"}
                  className="mt-4 rounded-lg"
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
