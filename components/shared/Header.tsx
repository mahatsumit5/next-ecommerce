"use client";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ThemeChanger } from "../theme-provider/ThemeChanger";
import MobileMenu from "../menu/MobileMenu";
import Dialog from "../dialog/Dialog";
import { RootState } from "@/store";
import CartButton from "../cart/CartButton";
import { useAppSelector } from "@/hook";
import { HeaderMenu } from "../menu/HeaderMenu";
import LoginButton from "../user-login/LoginButton";
import { Abril_Fatface } from "next/font/google";
const alerta = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });
const Header = () => {
  const { cart } = useAppSelector((state: RootState) => state.cart);

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollY);
  return (
    <header className=" w-full  h-[80px] shadow-2xl sticky top-0 z-10 bg-slate-300/50 backdrop-blur-2xl dark:bg-slate-800 pt-1 ">
      <div className="  wrapper flex justify-between h-16 items-center gap-5 relative">
        <div className="flex gap-2 justify-between items-center  min-w-[105px]">
          <MobileMenu />

          <div className=" relative w-[150px]  h-[100px] overflow-hidden hidden sm:block">
            <Link href={"/"}>
              <Image
                src={"/assets/logo.svg"}
                fill
                alt="logo"
                className="object-fill"
              />
            </Link>
          </div>

          <div className="hidden lg:flex gap-2 ">
            <HeaderMenu />
          </div>

          <span
            className={`block sm:hidden ${alerta.className} text-red-600 text-3xl `}
          >
            <Link href={"/"}>CFW</Link>
          </span>
        </div>

        <div className="flex gap-3 sm:gap-5">
          <Dialog />

          <CartButton cart={cart} />
          <LoginButton />
        </div>
        <ThemeChanger />
      </div>
    </header>
  );
};

export default Header;
