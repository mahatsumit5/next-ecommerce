"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch } from "@/hook";
import { getOrderByStripeId } from "@/lib/actions/order.actions";
import { resetCart } from "@/lib/redux/cart.slice";
import { IOrderItem } from "@/types";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
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
    <div className="min-h-[30vh] flex flex-col md:flex-row justify-between gap-2">
      <div className="w-full  md:w-7/12 flex flex-col gap-3 ">
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
      <div className="w-full  md:w-4/12  flex flex-col gap-2">
        <div className="flex gap-2 justify-start">
          <span>
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
          <span className="font-bold">Your order</span>

          <span className="rounded-full border bg-black text-white w-5 h-5 font-extrabold text-sm ps-1">
            {order.orderItems.length}
          </span>
        </div>
        <Separator />
        {order.orderItems.map((items) => (
          <div className="flex flex-row gap-3 " key={items._id}>
            <div className="w-24  rounded-md relative h-24 overflow-hidden">
              <Image
                src={items.thumbnail}
                alt="sss"
                fill
                className="object-cover "
              />
            </div>
            <div className="w-2/5  flex flex-col gap-2 ">
              <span className="font-bold text-xl "> {items.title}</span>
              <span>Color:{items.color}</span>
              <span className="p-2">x{items.orderQty}</span>
            </div>
            <div className="w-2/5  flex flex-col justify-end items-end font-bold">
              $ {items.price}
            </div>
          </div>
        ))}
        <span className="flex justify-between  w-full">
          <p className="font-bold"> Subtotal</p>

          <p className="text-muted-foreground">
            ${order.total_details.amount_subtotal}
          </p>
        </span>
        <Separator />
        <div>
          <span className="flex justify-between">
            <p className="font-bold">Shipping</p>
            <p className="text-muted-foreground">
              {order.total_details.amount_shipping}
            </p>
          </span>
          <span className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="text-muted-foreground">
              {order.total_details.amount_total}
            </p>
          </span>

          <Separator />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default page;
