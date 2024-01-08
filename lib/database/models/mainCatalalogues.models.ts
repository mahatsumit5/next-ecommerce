import mongoose, { model, models } from "mongoose";
const parentCatSchema = new mongoose.Schema();
const ParentCatalogue =
  models.ParentCategory || model("ParentCategory", parentCatSchema);
export default ParentCatalogue;
