import {
  getCatByParentCat,
  getMainCategories,
} from "@/lib/actions/category.actions";
import { handleError } from "@/lib/utils";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const result = await getCatByParentCat(id!);
    return Response.json({ category: result });
  } catch (error) {
    handleError(error);
  }
}
