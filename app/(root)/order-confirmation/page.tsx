"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch } from "@/hook";
import { getOrderByStripeId } from "@/lib/actions/order.actions";
import { resetCart } from "@/lib/redux/cart.slice";
import { IOrderItem } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function page() {
  const dispatch = useAppDispatch();

  const [order, setOrder] = useState<IOrderItem>();
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      const id = query.get("id");
      toast.success("Thank you for placing the order");
      dispatch(resetCart());
      getOrderByStripeId(id!).then((res) => {
        setOrder(res);
      });
    }
  }, []);
  if (!order) {
    return <div>Loading....</div>;
  }
  return (
    <div className="min-h-[30vh] flex flex-col sm:flex-row justify-between">
      <div className="w-full sm:w-2/5 flex flex-col gap-3 ">
        <span className="font-bold">
          Thank you {order.buyer.firstName.toUpperCase()}{" "}
          {order.buyer.lastName.toUpperCase()} for you order.
        </span>
        <p className="text-pretty">
          An email will be sent containing information about your purchase.If
          you have any questions about your purchase email us at-
          <a className="text-blue-600">cfw@info.com.</a>
        </p>
        <Separator />
        <div className="flex justify-between ">
          <span className="flex flex-col gap-1">
            <p className="font-bold">Order no.</p>
            <p className="text-sm">12345</p>
          </span>
          <span className="flex flex-col gap-1 text-right">
            <p className="font-bold">Payment</p>
            <p className="text-sm">Paypal</p>
          </span>
        </div>
        <div className="flex justify-between ">
          <span className="flex flex-col gap-1">
            <p className="font-bold">Address</p>
            <p>City</p>
            <p className="text-sm">Country</p>
            <p className="text-sm">line 1</p>
            <p className="text-sm">line2</p>
            <p className="text-sm">Postal Code</p>
            <p className="text-sm">State</p>
          </span>
          <span className="flex flex-col gap-1 text-right">
            <p className="font-bold">-</p>
            <p className="text-sm">{order.address.city}</p>
            <p className="text-sm">{order.address.country}</p>
            <p className="text-sm">{order.address.line1}</p>
            <p className="text-sm">
              {!order.address.line2 && "-"}
              {order.address.line2}
            </p>
            <p className="text-sm">{order.address.postal_code}</p>
            <p className="text-sm">{order.address.state}</p>
          </span>
        </div>

        <div className="flex justify-between ">
          <span className="flex flex-col gap-1">
            <p className="font-bold">Email</p>
            <p className="text-sm">{order.buyer.email}</p>
          </span>
          <span className="flex flex-col gap-1">
            <p className="font-bold">Phone Number</p>
            <p>-</p>
          </span>
        </div>
        <div>
          <Link href={"/"}>
            <Button variant={"default"} className="w-full">
              Continue Shopping
            </Button>
          </Link>{" "}
        </div>
      </div>
      <div className="w-full sm:w-2/5 border">2</div>
    </div>
  );
}

export default page;
