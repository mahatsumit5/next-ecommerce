import { createOrder } from "@/lib/actions/order.actions";
import { changeMetaDataIntoArray } from "@/lib/utils";
import { CreateOrderParams } from "@/types";
import { NextResponse } from "next/server";
import stripe from "stripe";
export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (error) {
    return NextResponse.json({ message: "webhook error", error: error });
  }
  const eventType = event.type;

  //   create order

  // Handle the event
  if (eventType === "checkout.session.completed") {
    const {
      shipping_details,
      client_reference_id,
      id,
      amount_total,
      amount_subtotal,
      metadata,
      total_details,
    } = event.data.object;
    const { uniqueId, ...rest }: any = metadata;
    const orderItems = changeMetaDataIntoArray(rest!);
    const address = shipping_details?.address;
    const obj: CreateOrderParams = {
      address: {
        city: address?.city!,
        country: address?.country!,
        line1: address?.line1!,
        line2: address?.line2!,
        postal_code: address?.postal_code!,
        state: address?.state!,
      },
      buyer: client_reference_id!,
      stripeId: id,
      total_details: {
        amount_discount: Number(total_details?.amount_discount!) / 100 || 0,
        amount_shipping: Number(total_details?.amount_shipping!) / 100 || 0,
        amount_tax: Number(total_details?.amount_tax!) / 100 || 0,
        amount_subtotal: Number(amount_subtotal!) / 100,
        amount_total: Number(amount_total!) / 100,
      },
      orderItems: orderItems,
      uniqueId,
    };
    const newOrder = await createOrder(obj);
    if (newOrder) {
      return NextResponse.json({ message: "OK", order: newOrder });
    } else {
      return NextResponse.json({ message: "failed" });
    }
  }
}
