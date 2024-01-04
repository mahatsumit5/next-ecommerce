"use server";
import Stripe from "stripe";
import { CreateOrderParams, checkoutOrderProps } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Order from "../database/models/order.models";
import Product from "../database/models/product.models";
import Customer from "../database/models/user.model";

export const checkOutOrder = async ({
  cart,
  email,
  customerId,
  shippingRate,
}: checkoutOrderProps) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const metadata: any = {};

  // Iterate through the cart array
  cart.forEach((item, index) => {
    // Dynamically create properties for each item in the metadata object
    metadata[`_id${index}`] = item._id;
    metadata[`orderQty${index}`] = item.orderQty;
    metadata[`size${index}`] = item.size;
    metadata[`color${index}`] = item.color;
  });
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      client_reference_id: customerId,
      customer_email: email,

      // payment_method_types: ["card", "au_becs_debit", ],
      currency: "aud",
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["AU"] },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Delivery Fee",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 5 },
            },
            fixed_amount: {
              amount: shippingRate * 100,
              currency: "aud",
            },
            tax_behavior: "inclusive",
            type: "fixed_amount",
          },
        },
      ],
      // consent_collection: { terms_of_service: "required" },

      line_items: cart.map((item) => {
        return {
          quantity: item.orderQty,
          price_data: {
            currency: "aud",
            unit_amount: item.price * 100,
            product_data: {
              name: item.title,
              description: item.description,
              images: item.images,
            },
            tax_behavior: "inclusive",
          },
        };
      }),

      metadata,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/order-confirmation`,
      invoice_creation: { enabled: true },

      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    });

    if (session.id) {
      return JSON.parse(JSON.stringify(session));
    } else {
      return;
    }
  } catch (err) {
    console.log(err);
  }
};

export const createOrder = async (order: CreateOrderParams) => {
  try {
    await connectToDatabase();
    const newOrder = await Order.create(order);
    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    handleError(error);
  }
};
export const getOrderByStripeId = async (id: string) => {
  try {
    await connectToDatabase();
    const order = await Order.findOne({ stripeId: id })
      .populate({
        path: "orderItems",
        model: Product,
        select: "title",
      })
      .populate({
        path: "buyer",
        model: Customer,
        select: "_id email firstName lastName",
      });
    console.log(order);
    return JSON.parse(JSON.stringify(order));
  } catch (error) {
    handleError(error);
  }
};
