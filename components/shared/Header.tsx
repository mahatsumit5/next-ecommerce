"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeChanger } from "../theme-provider/ThemeChanger";
import MobileMenu from "../menu/MobileMenu";
import Dialog from "../dialog/Dialog";
import { RootState } from "@/store";
import CartButton from "../cart/CartButton";
import { useAppSelector } from "@/hook";
import { HeaderMenu } from "../menu/HeaderMenu";
import LoginButton from "../user-login/LoginButton";
import { Abril_Fatface } from "next/font/google";
import NavigationMenu from "../menu/NavigationMenu";
const alerta = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });
const Header = () => {
  const { cart } = useAppSelector((state: RootState) => state.cart);

  return (
    <>
      <header className=" w-full  h-[80px] shadow-2xl sticky top-0 z-30 bg-slate-300/50 backdrop-blur-2xl dark:bg-slate-800 pt-1 ">
        <div className="  wrapper flex justify-between h-16 items-center gap-5 relative">
          <div className="flex gap-5 justify-between items-center   ">
            <MobileMenu />

            <Link
              href={"/"}
              className="relative mt-2 h-[50px] w-[50px] md:h-[64px] md:w-[65px]   rounded-full"
            >
              <Image
                src={"/assets/logo-light.png"}
                fill
                alt="logo"
                className="object-fill rounded-full dark:hidden"
                quality={50}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                src={"/assets/logo-dark.png"}
                fill
                alt="logo"
                className="object-fill rounded-full hidden dark:block"
                quality={50}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>

            <div className="hidden lg:block     ">
              <NavigationMenu />{" "}
            </div>
          </div>

          <div className="flex gap-3 sm:gap-5">
            <div className="hidden sm:block">
              <ThemeChanger />
            </div>
            <Dialog />

            <CartButton cart={cart} />
            <LoginButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
