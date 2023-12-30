import Hero from "@/components/Hero";
import Collection from "@/components/shared/Collection";
import {
  getAllCategories,
  getMainCategories,
} from "@/lib/actions/category.actions";
import React from "react";

async function Home() {
  const categories = await getAllCategories();
  const mainCategories = await getMainCategories();
  return (
    <>
      <Hero />
      <section className=" flex flex-col gap-5">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Shop By Categories
        </h3>
        <Collection
          data={categories}
          emptyTitle="No categories available"
          collectiontype="Categories"
          emptyStateSubtext="Please come back later"
        />
      </section>
    </>
  );
}

export default Home;
