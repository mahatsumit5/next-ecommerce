import ImageCarousel from "@/components/product/ImageCarousel";
import ProductDescription from "@/components/product/ProductDescription";
import SimilarProducts from "@/components/product/SimilarProducts";
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
