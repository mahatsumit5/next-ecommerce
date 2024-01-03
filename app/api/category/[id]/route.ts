import { getCatByParentCat } from "@/lib/actions/category.actions";
import { handleError } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const result = await getCatByParentCat(id!);
    if (result.length) {
      return NextResponse.json({ category: result });
    } else {
      return NextResponse.json({ category: [] });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
