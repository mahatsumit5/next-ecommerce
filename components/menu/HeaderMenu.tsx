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
import { IMainCat } from "@/types";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hook";
import { getCatgoryAction } from "@/lib/redux/actions/menu.actions";
import { RootState } from "@/store";
import Link from "next/link";
import MobileMenuAccordian from "./MobileMenuAccordian";

export function HeaderMenu({
  setIsSheetOpen,
}: {
  setIsSheetOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((store: RootState) => store.menu);
  const [parentCat, setParentCat] = useState<IMainCat[]>([]);

  useEffect(() => {
    function getData() {
      fetch("/api/catalogue", {
        method: "GET",
      }).then(async (res) => {
        const { catalogues } = await res.json();
        if (catalogues) {
          setParentCat(catalogues);
          catalogues.map(async (item: IMainCat, index: number) => {
            dispatch(getCatgoryAction(item._id, index));
          });
        }
      });
    }
    getData();
  }, [dispatch]);
  const arrangedData = rearrangeReduxData(parentCat, menu);
  return (
    <>
      {
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-5 flex-col justify-start lg:flex-row">
              {parentCat.map((parentCat, index) => {
                return (
                  <NavigationMenuItem
                    key={parentCat._id}
                    // onMouseEnter={() => {
                    //   getcategories(parentCat._id, index);
                    // }}
                  >
                    <NavigationMenuTrigger className="">
                      {parentCat.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <ul className="p-6 md:w-[400px] lg:w-[500px] flex flex-col md:flex-row justify-between ">
                        {arrangedData[index]?.category.map((cat, index) => (
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
                        {!arrangedData[index]?.category.length && (
                          <li className="  text-base text-red-600">No items</li>
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      }
      <div className="block lg:hidden">
        <div className="flex flex-col gap-2">
          {parentCat.map((category, index) => (
            <MobileMenuAccordian
              index={index}
              menu={arrangedData}
              // getcategories={getcategories}
              id={category._id}
              key={category._id}
              setIsSheetOpen={setIsSheetOpen!}
            >
              <p>{category.title}</p>
            </MobileMenuAccordian>
          ))}
        </div>
      </div>
    </>
  );
}
