import ImageCarousel from "@/components/shared/ImageCarousel";
import ProductDescription from "@/components/shared/ProductDescription";
import SimilarProducts from "@/components/shared/SimilarProducts";
import {
  getProductsByCategory,
  getProductsBySlug,
} from "@/lib/actions/product.actions";
import { IProduct, ProductPageParams } from "@/types";
import React from "react";
async function page({ params: { productSlug } }: ProductPageParams) {
  const product: IProduct = await getProductsBySlug(productSlug);
  const similarproduct = await getProductsByCategory(
    undefined,
    product.parentCat
  );
  console.log(similarproduct);
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ImageCarousel images={product.images} />
        <ProductDescription product={product} />
      </div>
      <SimilarProducts title="Similar Items" data={similarproduct} />
    </>
  );
}

export default page;
