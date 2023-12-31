"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Button } from "../ui/button";
import { ThemeChanger } from "./ThemeChanger";
import { Badge } from "../ui/badge";
import MobileMenu from "./MobileMenu";
import Dialog from "./Dialog";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CartDrawer from "./CartDrawer";
const Header = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" w-full   border-b shadow-2xl sticky top-0 z-10 bg-slate-100 dark:bg-slate-950">
      <div className="  wrapper flex justify-between h-16 items-center gap-5">
        <div className="flex gap-2 justify-between items-center">
          <Link href={"/"}>
            <div>
              <Image
                src={"/assets/logo.svg"}
                width={150}
                height={0}
                alt="logo"
              />
            </div>
          </Link>
          <div className="hidden md:flex gap-2 ">
            <NavigationMenuDemo />
            <ThemeChanger />
          </div>
        </div>
        <div className=" gap-5  hidden md:flex">
          <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
          <CartDrawer>
            <Button
              className="rounded-full  gap-2"
              variant="outline"
              size={"default"}
            >
              <Image
                src={"/assets/cart.png"}
                width={25}
                height={25}
                alt="logo"
              />
              <Badge variant="destructive">{cart.length}</Badge>
            </Button>
          </CartDrawer>
          <Button className="rounded-full " variant="default">
            Login
          </Button>
        </div>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
