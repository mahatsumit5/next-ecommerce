"use client";
import React from "react";
import { Button } from "../ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { ICartState } from "@/types";
import { checkOutOrder } from "@/lib/actions/order.actions";
import { countTotalItemsInCart } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
function Checkout({
  cart,
  total,
  shippingRate,
}: {
  cart: ICartState[];
  total: number;
  shippingRate: number;
}) {
  const router = useRouter();
  const { user } = useUser();
  console.log(user);
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const checkout = async () => {
    const obj = {
      cart,
      email: user?.primaryEmailAddress?.emailAddress!,
      customerId: user?.publicMetadata.userId! as string,
      shippingRate: shippingRate,
    };
    const session = await checkOutOrder(obj);
    router.push(session.url);
  };
  return (
    <form action={checkout}>
      <Button
        variant={"default"}
        className="rounded-lg"
        type="submit"
        role="link"
      >
        Checkout
      </Button>
    </form>
  );
}

export default Checkout;
