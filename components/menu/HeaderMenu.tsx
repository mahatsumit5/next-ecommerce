"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import { ICategory, IMainCat } from "@/types";
import Image from "next/image";

export function HeaderMenu() {
  const [parentCat, setParentCat] = useState<IMainCat[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function getData() {
      const result = await fetch("/api/catalogue", {
        method: "GET",
      });
      const data = await result.json();
      setParentCat(data?.catalogues);
    }
    getData();
  }, []);
  const getcategories = async (id: string) => {
    // const result = await fetch(`/api/category?id=${id}`, {
    //   method: "GET",
    // });
    // const data = await result.json();
    // setCategories(data?.category);
  };
  console.log(categories);
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-5 flex-col justify-start md:flex-row">
        {parentCat.map((cat) => {
          return (
            <NavigationMenuItem
              key={cat._id}
              onMouseEnter={() => {
                getcategories(cat._id);
              }}
            >
              <NavigationMenuTrigger>{cat.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {categories.length &&
                    categories.map((cat) => {
                      return (
                        <li className="row-span-3 flex  menu-page-image flex-col justify-between">
                          <div className="mb-2 h-[80px] w-[80px]  gap-2 border">
                            <Image src={cat.image} alt="category" fill />
                          </div>
                          <p className="text-md font-bold ">{cat.title}</p>
                        </li>
                      );
                    })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
