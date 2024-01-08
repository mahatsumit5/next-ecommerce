import { getParentCatalogues } from "@/lib/actions/mainCatalogues.actions";
import { handleError } from "@/lib/utils";

export async function GET() {
  try {
    const result = await getParentCatalogues();
    return Response.json({ catalogues: result });
  } catch (error) {
    handleError(error);
  }
}
