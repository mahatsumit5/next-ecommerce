import mongoose, { model, models } from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    title: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    parentCategory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Category = models.categories || model("categories", categorySchema);
export default Category;
