"use client";
import React from "react";
import { Button } from "../ui/button";
import { IProduct } from "@/types";
import { useDispatch } from "react-redux";
import { setCart } from "@/lib/redux/cart.slice";
type AddToCartProps = {
  variant:
    | "default"
    | "destructive"
    | "primary"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
  product: IProduct;
};
function AddToCart({ variant, product }: AddToCartProps) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(setCart({ ...product, orderQty: 1 }));
  };
  return (
    <Button
      size={"lg"}
      variant={variant}
      className="w-25"
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
}

export default AddToCart;
