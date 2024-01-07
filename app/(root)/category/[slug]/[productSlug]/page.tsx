import ImageCarousel from "@/components/product/ImageCarousel";
import ProductDescription from "@/components/product/ProductDescription";
import SimilarProducts from "@/components/product/SimilarProducts";
import {
  getProductsByCategory,
  getProductsBySlug,
} from "@/lib/actions/product.actions";
import { getReviews } from "@/lib/actions/review.actions";
import { IProduct, ProductPageParams } from "@/types";
import React from "react";
async function page({ params: { productSlug } }: ProductPageParams) {
  const product: IProduct = await getProductsBySlug(productSlug);
  const similarproduct = await getProductsByCategory(
    undefined,
    product.parentCat
  );
  const reviews = await getReviews(product._id);
  console.log(reviews);
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ImageCarousel images={product.images} />
        <ProductDescription product={product} reviews={reviews} />
      </div>
      <SimilarProducts title="Similar Items" data={similarproduct} />
    </>
  );
}

export default page;
