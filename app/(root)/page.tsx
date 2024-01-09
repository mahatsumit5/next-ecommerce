import Hero from "@/components/hero/Hero";
import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { getAllCategories } from "@/lib/actions/category.actions";
import { getFewProducts } from "@/lib/actions/product.actions";
import Link from "next/link";
import React from "react";
import { SearchParamProps } from "@/types";
import MoreCategoryButton from "@/components/home/MoreCategoryButton";
async function Home({ searchParams }: SearchParamProps) {
  const query = (searchParams?.query as string) || "";
  const skip = (searchParams?.skip as string) || 0;
  const categories = await getAllCategories({ query, skip: Number(skip) });
  const products = await getFewProducts(4, query);
  return (
    <>
      <Hero />
      <section className=" mt-10 flex flex-col gap-5" id="category">
        <span className="flex justify-between">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Browser By Category
          </h3>
          <div className="flex gap-2">
            <MoreCategoryButton total={categories?.total || 0} />
          </div>
        </span>
        <Collection
          data={categories?.data}
          emptyTitle="No categories available"
          collectiontype="Categories"
          emptyStateSubtext="Please come back later"
        />
      </section>
      <section className=" flex flex-col gap-5 mt-32">
        <span className="flex justify-between">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Featured products
          </h3>
          <Link href={"/product"}>
            <Button variant={"primary"}>View All Products</Button>
          </Link>
        </span>
        <Collection
          data={products}
          emptyTitle="No categories available"
          collectiontype="Products"
          emptyStateSubtext="Please come back later"
        />
      </section>
    </>
  );
}

export default Home;
