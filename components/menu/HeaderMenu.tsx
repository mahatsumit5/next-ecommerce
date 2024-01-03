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
import { get } from "http";
import { useAppDispatch, useAppSelector } from "@/hook";
import { getCatgoryAction } from "@/lib/redux/actions/menu.actions";
import { RootState } from "@/store";
import Link from "next/link";

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

  const getcategories = async (id: string) => {
    if (menu.filter((item) => item.parentCat === id).length) {
      return;
    }

    dispatch(getCatgoryAction(id));
  };
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-5 flex-col justify-start md:flex-row">
        {parentCat.map((cat, index) => {
          return (
            <NavigationMenuItem
              key={cat._id}
              onMouseEnter={() => {
                getcategories(cat._id);
              }}
            >
              <NavigationMenuTrigger>{cat.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="p-6 md:w-[400px] lg:w-[500px] flex flex-col md:flex-row justify-between ">
                  {cat._id === menu[index]?.parentCat &&
                    menu[index]?.category.map((cat, index) => {
                      return (
                        <Link href={`/category/${cat.slug}`} key={index}>
                          <li className=" flex   flex-col justify-between">
                            <span className="menu-page-image  gap-2 border">
                              <Image src={cat.image} alt="category" fill />
                            </span>
                            <p className="text-md font-bold ">{cat.title}</p>
                          </li>
                        </Link>
                      );
                    })}{" "}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
