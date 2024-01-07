import { Document, Schema, model, models } from "mongoose";

export interface InterfaceOrder extends Document {
  uniqueId: string;
  _id: string;
  stripeId: string;
  status: string;
  totalAmount: number;
  buyer: string;
  orderItems: [
    {
      _id: string;
      orderQty: string;
      size: string;
      color: string;
    }
  ];
  address: {
    city: string;
    country: string;
    line1: string;
    line2: string | null;
    postal_code: string;
    state: string;
  };
}

const orderSchema = new Schema(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true,
    },
    stripeId: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    orderItems: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "products",
        },

        orderQty: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          requiredd: false,
        },

        color: {
          type: String,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      default: "pending",
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    address: {
      city: { type: String },
      country: { type: String },
      line1: { type: String },
      line2: { type: String, default: null },
      postal_code: { type: String },
      state: { type: String },
    },
  },
  { timestamps: true }
);

const Order = models.NextOrder || model("NextOrder", orderSchema);
export default Order;
