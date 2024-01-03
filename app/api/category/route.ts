import { getCatByParentCat } from "@/lib/actions/category.actions";
import { handleError } from "@/lib/utils";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const result = await getCatByParentCat(id!);
    if (result.length) {
    }
    return Response.json({ category: [] });
  } catch (error) {
    handleError(error);
  }
}
