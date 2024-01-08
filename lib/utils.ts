import {
  ICartState,
  IMainCat,
  RemoveUrlQueryParams,
  TMenuStore,
  UrlQueryParams,
} from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { toast } from "sonner";
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
  return JSON.parse(JSON.stringify(error?.message));
}

export function countTotalPrice(cart: ICartState[]) {
  return cart.reduce(
    (totalPrice, num) => totalPrice + num.orderQty * num.price,
    0
  );
}
export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;
  const url = qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
  return url;
}
export function removeKeysFromQuery({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

export const rearrangeReduxData = (
  parentCat: IMainCat[],
  menuItems: TMenuStore[]
) => {
  let array = [];
  for (let i = 0; i < parentCat.length; i++) {
    const parent = parentCat[i];
    for (let j = 0; j < menuItems.length; j++) {
      const cat = menuItems[j];

      if (parent._id === cat.parentCat) {
        array.push(cat);
      }
    }
  }
  return array;
};

export const changeMetaDataIntoArray = (metadata: Record<string, string>) => {
  const orderItems: any = [];

  // Iterate through the properties of metadata
  for (const key in metadata) {
    if (metadata.hasOwnProperty(key)) {
      const match = key.match(/(\D+)(\d+)/);
      if (match && match[1] && match[2]) {
        const index = match[2];
        const property = match[1];

        if (!orderItems[index]) {
          orderItems[index] = {};
        }

        orderItems[index][property] = metadata[key] as string;
      }
    }
  }

  return orderItems;
};
