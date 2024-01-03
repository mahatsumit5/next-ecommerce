import { getMainCategories } from "@/lib/actions/category.actions";
import { handleError } from "@/lib/utils";

export async function GET() {
  try {
    const result = await getMainCategories();
    return Response.json({ catalogues: result });
  } catch (error) {
    handleError(error);
  }
}
