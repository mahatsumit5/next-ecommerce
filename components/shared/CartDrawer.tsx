"use client";
import React from "react";
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
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import Link from "next/link";
function CartDrawer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const cart = useSelector((store: RootState) => store.cart.cart);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader className="flex flex-row gap-2 justify-between">
          <SheetTitle className="mt-3">Cart</SheetTitle>
          <Link href={"/cart"}>
            <Button size={"sm"} variant={"default"}>
              {" "}
              View Cart Page
            </Button>
          </Link>
        </SheetHeader>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              className="flex flex-col items-center gap-2 shadow-md p-3 rounded-md mt-3"
              key={item._id}
            >
              <div className=" w-full h-[180px] flex gap-2">
                <span className="w-[150px]  relative rounded-lg">
                  <Image src={item.thumbnail} fill alt="thumbnail" />
                </span>
                <span className="flex flex-col  gap-2 justify-between">
                  {" "}
                  <p className="leading-7 [&:not(:first-child)]:mt-6 font-bold">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.sku}</p>
                  <p className="text-sm text-muted-foreground">{item.slug}</p>
                  <span className="flex justify-between gap-2">
                    <Button variant={"default"}>Delete</Button>
                    <Button variant={"outline"} className="flex-1">
                      Edit
                    </Button>
                  </span>
                </span>
              </div>
              <div className=" w-full h-[50px] flex justify-between gap-2">
                <span className="border rounded-2xl">
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="hover:no-underline"
                  >
                    -
                  </Button>
                  <Button variant={"link"} disabled size={"icon"}>
                    5
                  </Button>
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="hover:no-underline"
                  >
                    +
                  </Button>
                </span>
                <span className="text-xl">Total</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[140px] bg-grey-50 py-28 text-left">
            <h3 className="p-bold-20 md:h5-bold ">Your Cart is Empty.</h3>
            <p className="p-regular-14 text-gray-400">
              Add some items in your cart and come back again
            </p>
          </div>
        )}
        <SheetFooter>
          <SheetClose asChild>
            {cart.length > 0 ? (
              <Button type="submit" variant={"default"} className="mt-4">
                Checkout
              </Button>
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
