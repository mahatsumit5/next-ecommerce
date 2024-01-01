import { ICartState } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const numbers = [15.5, 2.3, 1.1, 4.7];

const total = numbers.reduce((total, num, index, numbers) => {
  return total + num;
}, 0);

export function countTotalItemsInCart(cart: ICartState[]) {
  const total = cart.reduce((total, num, index, cart) => {
    return total + num.orderQty;
  }, 0);
  return total;
}
