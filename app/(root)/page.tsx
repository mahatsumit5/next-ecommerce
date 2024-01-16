import Hero from "@/components/hero/Hero";
import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/lib/actions/category.actions";
import { getFewProducts } from "@/lib/actions/product.actions";
import Link from "next/link";
import React from "react";
import { ICategory, SearchParamProps } from "@/types";
import MoreCategoryButton from "@/components/home/MoreCategoryButton";
import { HeaderMenu } from "@/components/menu/HeaderMenu";
import { CategoryCarousel } from "@/components/category/CategoryCarousel";
import { currentUser } from "@clerk/nextjs";
import { getFavouriteByUser } from "@/lib/actions/favourite.actions";
async function Home({ searchParams }: SearchParamProps) {
  const query = (searchParams?.query as string) || "";
  const skip = (searchParams?.skip as string) || 0;

  const categories = await getAllCategories({
    query,
  });
  const products = await getFewProducts(4, query);

  return (
    <>
      <div className="flex justify-between ">
        <div className="hidden md:block">
          <HeaderMenu />
        </div>
      </div>
      <Hero />
      <section className=" mt-10 flex flex-col gap-5" id="category">
        <span className="flex justify-between">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Browser By Category
          </h3>
          {/* <div className="flex gap-2">
            <MoreCategoryButton total={categories?.total || 0} />
          </div> */}
        </span>
        <div className="h-auto  flex justify-center">
          {" "}
          <CategoryCarousel categories={categories?.data} />
        </div>
      </section>
      <section className=" flex flex-col gap-5 mt-32">
        <span className="flex justify-between">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Featured products
          </h3>
          <Link href={"/products"}>
            <Button variant={"primary"}>View All Products</Button>
          </Link>
        </span>
        <Collection
          data={products}
          emptyTitle="No products available"
          collectiontype="Products"
          emptyStateSubtext="Please come back later"
        />
      </section>
    </>
  );
}

export default Home;
