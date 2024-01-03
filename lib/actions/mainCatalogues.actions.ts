import mongoose from "mongoose";
import { connectToDatabase } from "../database";
import ParentCatalogue from "../database/models/mainCatalalogues.models";
import { handleError } from "../utils";

export async function getParentCatalogues() {
  try {
    await connectToDatabase();
    const parentCategories = await ParentCatalogue.find();

    return JSON.parse(JSON.stringify(parentCategories));
  } catch (error) {
    handleError(error);
  }
}
