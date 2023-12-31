import Hero from "@/components/Hero";
import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import {
  getAllCategories,
  getMainCategories,
} from "@/lib/actions/category.actions";
import { getFewProducts } from "@/lib/actions/product.actions";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

async function Home() {
  const categories = await getAllCategories();
  const products = await getFewProducts(4);

  return (
    <>
      <Hero />
      <section className=" mt-10 flex flex-col gap-5" id="category">
        <span className="flex justify-between">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Browser By Category
          </h3>
          <div className="flex gap-2">
            <Button variant={"destructive"}>
              <ArrowLeftIcon />
            </Button>
            <Button variant={"destructive"}>
              <ArrowRightIcon />
            </Button>
          </div>
        </span>
        <Collection
          data={categories}
          emptyTitle="No categories available"
          collectiontype="Categories"
          emptyStateSubtext="Please come back later"
        />
      </section>
      <Separator />
      <section className=" flex flex-col gap-5 mt-32">
        <span className="flex justify-between">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Featured products
          </h3>
          <Link href={"/product"}>
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
