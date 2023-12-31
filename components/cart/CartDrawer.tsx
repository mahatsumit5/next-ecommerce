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
import CartSummary from "./CartSummary";
function CartDrawer({ children }: { children: React.ReactNode }) {
  const cart = useAppSelector((store: RootState) => store.cart.cart);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader className="flex flex-row gap-2 justify-between">
          <SheetTitle className="mt-3">Cart</SheetTitle>
        </SheetHeader>
        <CartItem type="drawer" />
        <CartSummary />
        <SheetFooter className="sm:justify-start">
          <SheetClose asChild>
            {cart.length > 0 ? (
              <Link href={"/cart"} className=" w-full">
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="flex w-full dark:bg-slate-700"
                >
                  View Cart
                </Button>
              </Link>
            ) : (
              <Link href={"/"} className="w-full">
                <Button variant={"outline"} className="flex w-full ">
                  Continue Shopping
                </Button>
              </Link>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
