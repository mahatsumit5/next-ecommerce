import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    orderItems: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
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

    totalAmount: {
      type: Number,
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
  },
  { timestamps: true }
);

const Order = models.NextOrder || model("NextOrder", orderSchema);
export default Order;
