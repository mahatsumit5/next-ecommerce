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
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full  p-5 border-b-2 shadow-2xl sticky top-0 z-10 ">
      <div className="  wrapper flex justify-between h-16 items-center gap-5">
        <div className="flex gap-2 justify-between items-center">
          <Link href={"/"}>
            <div>
              <Image
                src={"/assets/logo.svg"}
                width={200}
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
          <Button
            className="rounded-full border gap-2"
            variant="ghost"
            size={"default"}
          >
            <Image src={"/assets/cart.png"} width={25} height={25} alt="logo" />
            <Badge variant="destructive">5</Badge>
          </Button>{" "}
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
