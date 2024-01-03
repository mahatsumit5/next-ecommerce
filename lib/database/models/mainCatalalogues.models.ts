import mongoose, { models } from "mongoose";
const mainCatSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);
const ParentCatalogue =
  models.mainCat || mongoose.model("mainCat", mainCatSchema);
export default ParentCatalogue;
