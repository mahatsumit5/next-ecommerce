"use client";
import { useAppDispatch, useAppSelector } from "@/hook";
import { RootState } from "@/store";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ICartState } from "@/types";
import { removeItemFromCart, setCart } from "@/lib/redux/cart.slice";
import { toast } from "sonner";
import Link from "next/link";

function CartItem({ type }: { type: "drawer" | "page" }) {
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
            className="flex flex-col items-center gap-3 shadow-md p-2 rounded-md mt-2 "
            key={item._id}
          >
            <div className=" w-full  flex gap-2">
              <span
                className={`${
                  type === "drawer" ? "drawer-cart-image" : "cart-page-image"
                } `}
              >
                <Image
                  src={item.thumbnail}
                  fill
                  alt="thumbnail"
                  className="rounded-lg hover:shadow-xl"
                />
              </span>
              <span className="  flex flex-col gap-1 justify-between">
                <p className="leading-7 text-sm font-bold line-clamp-1">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1 hidden md:block">
                  {" "}
                  ${item.sku}
                </p>
                <span className="flex gap-2">
                  <p className="leading-7  text-sm font-bold">Color:</p>
                  <button
                    className={`w-6 rounded-full h-6 `}
                    key={item._id}
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </span>
                <span className="flex gap-2">
                  <p className="leading-7  text-sm font-bold">Size: </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.size.toUpperCase()}
                  </p>
                </span>
                <span className="flex gap-2">
                  <p className="leading-7  text-sm font-bold">Price: </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {" "}
                    ${item.price}
                  </p>
                </span>
                <span className=" flex   justify-between rounded-3xl shadow-md  ">
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="hover:no-underline hover:scale-x-150"
                    onClick={() => {
                      handleQuanityChange(item, "decrease");
                    }}
                  >
                    -
                  </Button>
                  <Button variant={"link"} disabled size={"icon"} className="">
                    {item.orderQty}
                  </Button>
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="hover:no-underline  hover:scale-x-150"
                    onClick={() => {
                      handleQuanityChange(item, "increase");
                    }}
                  >
                    +
                  </Button>
                </span>
              </span>
            </div>
            <div className="flex w-full  justify-between gap-2">
              <span className="flex justify-start gap-2">
                <Link href={`/category/slug/${item.slug}`}>
                  <Button variant={"outline"} className="">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant={"default"}
                  onClick={() => {
                    handleQuanityChange(item, "delete");
                  }}
                >
                  Delete
                </Button>
              </span>
              <span className="text-sm sm:text-xl flex gap-2">
                <p className="font-bold">Total:</p>
                <p className="">${item.price * item.orderQty}</p>
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
