import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  favouriteItem: [
    {
      _id: { type: Schema.Types.ObjectId, required: false },
      title: { type: String, required: false },
      slug: { type: String, required: false },
      price: { type: Number, required: false },
      sku: { type: String, required: false },
      thumbnail: { type: String, required: false },
    },
  ],
});

const Customer = models.Customer || model("Customer", customerSchema); //get model from mongoose or create a new one if does not exist
export default Customer;
