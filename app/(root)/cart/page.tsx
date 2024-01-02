"use client";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useAppSelector } from "@/hook";
import { countTotalItemsInCart } from "@/lib/utils";
import { RootState } from "@/store";
import React from "react";

function page() {
  const { cart } = useAppSelector((store: RootState) => store.cart);
  const length = countTotalItemsInCart(cart);
  return (
    <div>
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
        Your cart:&nbsp;{length} {length > 1 ? "items" : "item"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 ">
        <CartItem />
        <CartSummary />
      </div>
    </div>
  );
}

export default page;
