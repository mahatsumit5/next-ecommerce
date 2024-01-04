"use client";

import { useAppDispatch, useAppSelector } from "@/hook";
import { getOrderByStripeId } from "@/lib/actions/order.actions";
import { updateProductQuantity } from "@/lib/actions/product.actions";
import { resetCart } from "@/lib/redux/cart.slice";
import { RootState } from "@/store";
import { IOrderItem } from "@/types";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function page() {
  const id = localStorage.getItem("payment_id");
  const { cart } = useAppSelector((store: RootState) => store.cart);
  const dispatch = useAppDispatch();

  const [order, setOrder] = useState<IOrderItem>();

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      toast.success("Thank you for placing the order");
      dispatch(resetCart());
      getOrderByStripeId(id!).then((res) => {
        setOrder(res);
      });
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  useEffect(() => {
    if (!id) {
      return;
    }
  }, []);
  console.log(order);

  return <div className="min-h-[30vh]">{order?.buyer.firstName}</div>;
}

export default page;
