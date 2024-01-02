import { ICartState } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function countTotalItemsInCart(cart: ICartState[]) {
  const total = cart.reduce((total, num, index, cart) => {
    return total + num.orderQty;
  }, 0);
  return total;
}

export function handleError(error: any) {
  console.log("An error occurred: ", error);
  throw new Error(JSON.stringify(error));
}
