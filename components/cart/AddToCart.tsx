"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AddToCartProps } from "@/types";
import { removeItemFromCart, setCart } from "@/lib/redux/cart.slice";
import { RootState } from "@/store";
import CustomAlertDialog from "../dialog/AlertDialog";
import { useAppDispatch, useAppSelector } from "@/hook";
import { toast } from "sonner";

function AddToCart({
  variant,
  product,
  color,
  size,
  orderQuantity,
}: AddToCartProps) {
  const { cart } = useAppSelector((state: RootState) => state.cart);
  const itemInCart = cart.filter((item) => item._id === product._id);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (itemInCart.length > 0) {
      dispatch(removeItemFromCart(product._id));

      return;
    }

    if (size === "") {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
    dispatch(
      setCart({
        ...product,
        orderQty: orderQuantity || 1,
        color,
        size,
      })
    );
  };
  return (
    <>
      <CustomAlertDialog
        isOpen={isOpen}
        description="Please select a size and try again."
        title="Size is Required!!"
      >
        <Button
          size={"lg"}
          variant={variant}
          className="w-[120px]"
          onClick={handleAddToCart}
        >
          {itemInCart.length ? "Remove" : "Add to Cart"}
        </Button>
      </CustomAlertDialog>
    </>
  );
}

export default AddToCart;
