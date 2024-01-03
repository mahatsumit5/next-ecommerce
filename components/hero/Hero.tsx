import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ADLaM_Display } from "next/font/google";
import Link from "next/link";

const adlam = ADLaM_Display({ weight: ["400"], subsets: ["adlam"] });
const Hero = () => {
  return (
    <div
      className={`${adlam.className}   bg-dotted-pattern bg-cover mt-5 wrapper flex flex-col  md:flex-row justify-between items-center h-fit relative  `}
    >
      <div className="flex flex-col  gap-7">
        <p className="text-xl text-muted-foreground">
          Get your winter Jacket Now!!
        </p>{" "}
        <h1 className=" text-5xl font-extrabold tracking-tight lg:text-5xl">
          Fashion
        </h1>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-red-600">
          Limited Offer. Expires in 5 days
        </h1>
        <div>
          <Link href={"#category"}>
            <Button
              variant={"destructive"}
              size={"lg"}
              className="shadow-lg rounded-3xl"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-hero-blob  bg-cover bg-center ">
        <Image
          src={"/assets/hero2.png"}
          width={1000}
          height={1000}
          alt="hero"
          className="max-h-[70vh] object-contain object-center"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
