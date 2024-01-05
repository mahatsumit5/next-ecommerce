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
  const [isOpen, setIsOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <header className=" w-full  h-[80px] shadow-2xl sticky top-0 z-10 bg-slate-100/55 backdrop-blur-2xl dark:bg-slate-800 pt-1 ">
      <div className="  wrapper flex justify-between h-16 items-center gap-5">
        <div className="flex gap-2 justify-between items-center">
          <MobileMenu
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
          />

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
        </div>
        <span
          className={`block sm:hidden ${alerta.className} text-red-600 text-3xl flex-grow`}
        >
          <Link href={"/"}>CFW</Link>
        </span>
        <div className=" gap-1 flex">
          <div className="hidden sm:flex mt-2">
            <ThemeChanger />
          </div>
          <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />

          <CartButton cart={cart} />
          <div className="hidden sm:block ">
            <LoginButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
