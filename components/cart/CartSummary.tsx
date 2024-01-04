"use client";
import React from "react";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSelector } from "@/hook";
import { RootState } from "@/store";
import { countTotalPrice } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Checkout from "./Checkout";
function CartSummary() {
  const { cart } = useAppSelector((store: RootState) => store.cart);
  const shippingPrice = 15.0;
  const total = countTotalPrice(cart);
  return (
    <div className="flex flex-col items-start gap-4 p-1 rounded-md mt-3">
      <p className="text-2xl font-bold">Summary</p>
      <Separator />
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">
            Do you have a Promo Code??
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <p className="text-muted-foreground">ENTER PROMO CODE</p>
            <span className="flex gap-2">
              <Input placeholder="promo code" />
              <Button variant={"default"}>Submit</Button>
            </span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <span className="flex justify-between  w-full">
        <p className="font-semibold">Subtotal</p>
        <p>${total}</p>
      </span>
      <span className="flex justify-between w-full">
        <p className="font-semibold">Estimated Shipping & handling</p>
        <p>$15.00</p>
      </span>
      <span className="flex justify-between w-full">
        <p className="font-semibold">Estimated Tax</p>
        <p>Included</p>
      </span>
      <Separator />
      <span className="flex justify-between  w-full">
        <p className="font-semibold">Total</p>
        <p className="font-extrabold">${total + shippingPrice}</p>
      </span>
      <div className="">
        <SignedIn>
          <Checkout cart={cart} total={total} shippingRate={shippingPrice} />
        </SignedIn>
        <SignedOut>
          <Link href={"/sign-in"}>
            <Button variant={"default"} className="rounded-lg">
              Checkout
            </Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
}

export default CartSummary;
