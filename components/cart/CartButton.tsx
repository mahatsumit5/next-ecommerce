import React from "react";
import CartDrawer from "./CartDrawer";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ICartState } from "@/types";
import { countTotalItemsInCart } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartButton({ cart }: { cart: ICartState[] }) {
  const total = countTotalItemsInCart(cart);
  return (
    <CartDrawer>
      <Button
        className="rounded-full   relative w-4 sm:w-16 sm:shadow-lg sm:dark:bg-slate-600 hover:scale-125 transition-all"
        variant="link"
        size={"sm"}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          size="xl"
          color="blue"
          className="  dark:text-cyan-400"
        />
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
