import Hero from "@/components/Hero";
import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import {
  getAllCategories,
  getMainCategories,
} from "@/lib/actions/category.actions";
import { getFewProducts } from "@/lib/actions/product.actions";
import Link from "next/link";
import React from "react";

async function Home() {
  const categories = await getAllCategories();
  const products = await getFewProducts(4);

  return (
    <>
      <Hero />
      <section className=" flex flex-col gap-5">
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Browser By Category
        </h3>
        <Collection
          data={categories}
          emptyTitle="No categories available"
          collectiontype="Categories"
          emptyStateSubtext="Please come back later"
        />
      </section>
      <section className=" flex flex-col gap-5 mt-10">
        <span className="flex justify-between">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Featured products
          </h3>
          <Link href={"/product"}>
            {" "}
            <Button variant={"destructive"}>View All Products</Button>
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
