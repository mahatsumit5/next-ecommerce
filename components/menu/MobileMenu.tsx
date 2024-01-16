import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HeaderMenu } from "./HeaderMenu";
import Link from "next/link";
import LoginButton from "../user-login/LoginButton";
import NavigationMenu from "./NavigationMenu";
import { IoIosArrowDropleft } from "react-icons/io";
import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
function MobileMenu() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [displayContent, setDisplayContent] = useState<
    "navigation" | "category"
  >("navigation");
  const [width, setWidth] = useState(window.innerWidth);
  const components = {
    navigation: (
      <NavigationMenu
        setIsSheetOpen={setIsSheetOpen}
        setDisplayContent={setDisplayContent}
      />
    ),
    category: <HeaderMenu setIsSheetOpen={setIsSheetOpen} />,
  };
  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    if (width > 1023) {
      setIsSheetOpen(false);
    }
  }, [width]);
  return (
    <div className="block lg:hidden">
      <Sheet open={isSheetOpen}>
        <SheetTrigger asChild>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#1056d1" }}
            size="xl"
            className="hover:animate-spin transition-all"
            onClick={() => {
              setIsSheetOpen(true);
            }}
          />
        </SheetTrigger>

        <SheetContent className="overflow-y-auto flex flex-col ">
          <SheetHeader className="flex flex-row w-full  relative">
            <div className=" w-full  h-[80px] absolute -top-10 left-16">
              <div className=" w-full h-24   flex items-center justify-start text-xl  text-cyan-700 dark:text-cyan-400">
                <Link
                  href={"/"}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className={pacifico.className}
                >
                  Classic fashion wears
                </Link>
              </div>
            </div>
            {displayContent === "category" && (
              <div className="absolute -top-5 -left-5">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="text-xl animate-pulse shadow-sm"
                  onClick={() => {
                    setDisplayContent("navigation");
                  }}
                >
                  <IoIosArrowDropleft />
                </Button>
              </div>
            )}
          </SheetHeader>

          <div className="mt-6 border-t pt-4 flex  flex-col gap-3 flex-1   ">
            {components[displayContent]}
          </div>

          <div className="h-14 border-t pt-3">
            <LoginButton />
          </div>

          <SheetClose
            asChild
            className="absolute top-2 right-2 bg-slate-100 z-40"
          >
            <Button
              size={"icon"}
              variant={"link"}
              className=" rounded-md text-muted-foreground hover:no-underline hover:text-slate-700 hover:shadow-lg transition-all dark:bg-slate-800"
              onClick={() => {
                setIsSheetOpen(false);
              }}
            >
              x
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
