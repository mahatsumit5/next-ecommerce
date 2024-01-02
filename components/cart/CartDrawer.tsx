"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { RootState } from "@/store";
import Link from "next/link";
import { useAppSelector } from "@/hook";
import CartItem from "./CartItem";
function CartDrawer({ children }: { children: React.ReactNode }) {
  const cart = useAppSelector((store: RootState) => store.cart.cart);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader className="flex flex-row gap-2 justify-between">
          <SheetTitle className="mt-3">Cart</SheetTitle>
        </SheetHeader>
        <CartItem />
        <SheetFooter>
          <SheetClose asChild>
            {cart.length > 0 ? (
              <Link href={"/cart"}>
                <Button size={"sm"} variant={"default"} className="mt-4">
                  View Cart
                </Button>
              </Link>
            ) : (
              <Link href={"/"}>
                <Button variant={"outline"}>Continue Shopping</Button>
              </Link>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
