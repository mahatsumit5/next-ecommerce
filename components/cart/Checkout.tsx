"use client";
import React from "react";
import { Button } from "../ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { ICartState, checkoutOrderProps } from "@/types";
import { checkOutOrder } from "@/lib/actions/order.actions";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
function Checkout({
  cart,
  total,
  shippingRate,
  uniqueId,
}: {
  cart: ICartState[];
  total: number;
  shippingRate: number;
  uniqueId: string;
}) {
  const router = useRouter();
  const { user } = useUser();

  const checkout = async () => {
    const obj = {
      cart,
      email: user?.primaryEmailAddress?.emailAddress!,
      customerId: user?.publicMetadata.userId! as string,
      shippingRate: shippingRate,
      uniqueId,
    } as checkoutOrderProps;

    const session = await checkOutOrder(obj);
    localStorage.setItem("payment_id", session.id);
    router.push(session.url);
  };
  return (
    <form action={checkout} className="">
      <Button
        variant={"default"}
        className="rounded-lg flex w-full "
        type="submit"
        role="link"
      >
        Checkout
      </Button>
    </form>
  );
}

export default Checkout;
