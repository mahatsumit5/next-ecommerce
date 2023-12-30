import { ProductPageParams } from "@/types";
import React from "react";

function page({ params: { productSlug } }: ProductPageParams) {
  console.log(productSlug);
  return <div>ProuductPage</div>;
}

export default page;
