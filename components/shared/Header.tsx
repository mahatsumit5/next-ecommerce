"use client";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
import CartButton from "./CartButton";
const Header = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" w-full   border-b shadow-2xl sticky top-0 z-10 bg-slate-100 dark:bg-slate-950">
      <div className="  wrapper flex justify-between h-16 items-center gap-5">
        <div className="flex gap-2 justify-between items-center">
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} />

          <div className=" relative w-[120px] h-[80px]">
            <Link href={"/"}>
              <Image src={"/assets/logo.svg"} fill alt="logo" />
            </Link>
          </div>

          <div className="hidden md:flex gap-2 ">
            <NavigationMenuDemo />
            <ThemeChanger />
          </div>
        </div>
        <div className=" gap-1  flex">
          <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
          <span className="hidden sm:block">
            <CartButton cart={cart} />
          </span>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button className="rounded-full " variant="default">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
