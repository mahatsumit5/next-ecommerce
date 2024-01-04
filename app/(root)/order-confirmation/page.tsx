"use client";

import { useAppDispatch } from "@/hook";
import { getOrderByStripeId } from "@/lib/actions/order.actions";
import { resetCart } from "@/lib/redux/cart.slice";
import { IOrderItem } from "@/types";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function page() {
  const id = localStorage.getItem("payment_id");
  const dispatch = useAppDispatch();

  const [order, setOrder] = useState<IOrderItem>();
  useEffect(() => {
    if (!id) {
      return;
    }
    toast.success("Thank you for placing the order");
    dispatch(resetCart());
    getOrderByStripeId(id!).then((res) => {
      setOrder(res);
    });
  }, []);
  console.log(order);

  return <div className="min-h-[30vh]">{order?.buyer.firstName}</div>;
}

export default page;
