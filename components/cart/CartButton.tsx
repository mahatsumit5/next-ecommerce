import React from "react";
import CartDrawer from "./CartDrawer";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ICartState } from "@/types";
import { countTotalItemsInCart } from "@/lib/utils";

function CartButton({ cart }: { cart: ICartState[] }) {
  const total = countTotalItemsInCart(cart);
  return (
    <CartDrawer>
      <Button
        className="rounded-full   relative w-16 sm:shadow-lg dark:bg-slate-600"
        variant="ghost"
        size={"sm"}
      >
        <Image src={"/assets/cart.png"} width={25} height={25} alt="logo" />
        {cart.length > 0 && (
          <Badge variant="destructive" className="absolute -top-2 -right-0 ">
            {total}
          </Badge>
        )}{" "}
      </Button>
    </CartDrawer>
  );
}

export default CartButton;
