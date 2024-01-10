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
      <header className=" w-full  h-[70px] shadow-2xl sticky top-0 z-30 bg-slate-300/50 backdrop-blur-2xl dark:bg-slate-800 pt-1 ">
        <div className="  wrapper flex justify-between h-16 items-center gap-5 relative">
          <div className="flex gap-5 justify-between items-center   ">
            <MobileMenu />

            <div className=" relative w-[250px]  h-[100px] overflow-hidden hidden sm:block ">
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.svg"}
                  fill
                  alt="logo"
                  className="object-fill absolute -left-5"
                />
              </Link>
            </div>

            <span
              className={`block sm:hidden ${alerta.className} text-red-600 text-3xl `}
            >
              <Link href={"/"}>CFW</Link>
            </span>
            <div className="hidden lg:block     ">
              <NavigationMenu />{" "}
            </div>
          </div>

          <div className="flex gap-3 sm:gap-5">
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
