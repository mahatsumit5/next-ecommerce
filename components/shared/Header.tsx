"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Button } from "../ui/button";
import { ThemeChanger } from "./ThemeChanger";
import { Badge } from "../ui/badge";
import Search from "./Search";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" wrapper w-full  p-5 ">
      <div className="flex justify-between h-16 items-center gap-5">
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

          <NavigationMenuDemo />
          <ThemeChanger />
        </div>
        {isOpen && <Search />}
        <div className="flex  gap-5 ">
          <Button
            className="rounded-full "
            variant="secondary"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Image
              src={"/assets/search.svg"}
              width={15}
              height={15}
              alt="logo"
              className="rounded-image"
              style={{}}
            />
            Search
          </Button>
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
      </div>
    </header>
  );
};

export default Header;
