import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
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
          type: Number,
          required: true,
        },
        size: {
          type: String,
          default: false,
        },

        color: {
          type: String,
          require: true,
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
