"use client";
import { useAppDispatch, useAppSelector } from "@/hook";
import { RootState } from "@/store";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ICartState } from "@/types";
import { removeItemFromCart, setCart } from "@/lib/redux/cart.slice";
import { it } from "node:test";
import { toast } from "sonner";

function CartItem() {
  const cart = useAppSelector((store: RootState) => store.cart.cart);
  const dispatch = useAppDispatch();

  function handleQuanityChange(
    item: ICartState,
    type: "increase" | "decrease" | "delete"
  ) {
    if (type === "increase") {
      if (item.qty === item.orderQty) {
        toast("Maximum order quantity reached.", {
          action: {
            label: "Ok",
            onClick: () => console.log("ok"),
          },
        });
        return;
      }
      dispatch(setCart({ ...item, orderQty: item.orderQty + 1 }));
    }
    // If the quantity is more than one and we try to decrease it, remove it from the cart
    if (type === "decrease") {
      if (item.orderQty === 1) {
        dispatch(removeItemFromCart(item._id));
        return;
      }
      dispatch(setCart({ ...item, orderQty: item.orderQty - 1 }));
    }
    if (type === "delete") {
      dispatch(removeItemFromCart(item._id));
    }
  }
  return (
    <>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            className="flex flex-col items-center gap-2 shadow-md p-3 rounded-md mt-3"
            key={item._id}
          >
            <div className=" w-full h-[180px] flex gap-2">
              <span className="w-[180px]  relative rounded-lg">
                <Image src={item.thumbnail} fill alt="thumbnail" />
              </span>
              <span className="flex flex-col  gap-2 justify-between">
                <p className="leading-7  font-bold">{item.title}</p>
                <span className="flex gap-2">
                  <p className="leading-7  font-bold">Color:</p>
                  <button
                    className={`w-6 rounded-full h-6 `}
                    key={item._id}
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </span>
                <span className="flex gap-2">
                  <p className="leading-7  font-bold">Size: </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.size.toUpperCase()}
                  </p>
                </span>

                <span className="flex justify-between gap-2">
                  <Button variant={"outline"} className="flex-1">
                    Edit
                  </Button>
                  <Button
                    variant={"default"}
                    onClick={() => {
                      handleQuanityChange(item, "delete");
                    }}
                  >
                    Delete
                  </Button>
                </span>
              </span>
            </div>
            <div className=" w-full h-[50px] flex justify-between gap-2">
              <span className="border rounded-2xl shadow-md">
                <Button
                  variant={"link"}
                  size={"icon"}
                  className="hover:no-underline border-r"
                  onClick={() => {
                    handleQuanityChange(item, "decrease");
                  }}
                >
                  -
                </Button>
                <Button
                  variant={"link"}
                  disabled
                  size={"icon"}
                  className=" border-r"
                >
                  {item.orderQty}
                </Button>
                <Button
                  variant={"link"}
                  size={"icon"}
                  className="hover:no-underline"
                  onClick={() => {
                    handleQuanityChange(item, "increase");
                  }}
                >
                  +
                </Button>
              </span>
              <span className="text-xl flex gap-2">
                <p className="leading-7  font-bold">Total:</p>$
                {item.price * item.orderQty}
              </span>
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
    </>
  );
}

export default CartItem;
