import React from "react";
import CartDrawer from "./CartDrawer";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ICartState } from "@/types";

function CartButton({ cart }: { cart: ICartState[] }) {
  return (
    <CartDrawer>
      <Button
        className="rounded-full  gap-2 relative mr-3 hover:border hover:shadow-lg"
        variant="ghost"
        size={"default"}
      >
        <Image src={"/assets/cart.png"} width={25} height={25} alt="logo" />{" "}
        {cart.length > 0 && (
          <Badge variant="destructive" className="absolute top-0 -right-1">
            {cart.length}
          </Badge>
        )}
      </Button>
    </CartDrawer>
  );
}

export default CartButton;
