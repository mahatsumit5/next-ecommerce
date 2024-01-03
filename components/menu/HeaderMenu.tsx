"use client";
import * as React from "react";
import { cn, rearrangeReduxData } from "@/lib/utils";
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
import { get } from "http";
import { useAppDispatch, useAppSelector } from "@/hook";
import { getCatgoryAction } from "@/lib/redux/actions/menu.actions";
import { RootState } from "@/store";
import Link from "next/link";
import MobileMenuAccordian from "./MobileMenuAccordian";

export function HeaderMenu() {
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((store: RootState) => store.menu);
  const [parentCat, setParentCat] = useState<IMainCat[]>([]);
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

  const getcategories = async (id: string, index: number) => {
    if (menu.filter((item) => item.parentCat === id).length) {
      return;
    }

    dispatch(getCatgoryAction(id, index));
  };
  const newArray = rearrangeReduxData(parentCat, menu);
  return (
    <>
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-5 flex-col justify-start lg:flex-row">
            {parentCat.map((parentCat, index) => {
              return (
                <NavigationMenuItem
                  key={parentCat._id}
                  onMouseEnter={() => {
                    getcategories(parentCat._id, index);
                  }}
                >
                  <NavigationMenuTrigger className="">
                    {parentCat.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <ul className="p-6 md:w-[400px] lg:w-[500px] flex flex-col md:flex-row justify-between ">
                      {newArray[index]?.category.map((cat, index) => (
                        <Link href={`/category/${cat.slug}`} key={index}>
                          <li className=" flex   flex-col justify-between">
                            <span className="menu-page-image  overflow-hidden gap-2 border">
                              <Image
                                src={cat.image}
                                alt="category"
                                fill
                                className="object-cover"
                              />
                            </span>
                            <p className="text-md font-bold ">{cat.title}</p>
                          </li>
                        </Link>
                      ))}
                      {!newArray[index]?.category.length && (
                        <li className=" text-2xl">No items</li>
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="block lg:hidden">
        <div className="flex flex-col gap-2">
          {parentCat.map((category, index) => (
            <MobileMenuAccordian
              index={index}
              newArray={newArray}
              getcategories={getcategories}
              id={category._id}
              key={category._id}
            >
              <p>{category.title}</p>
            </MobileMenuAccordian>
          ))}
        </div>
      </div>
    </>
  );
}
