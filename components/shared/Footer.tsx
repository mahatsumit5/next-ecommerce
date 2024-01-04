import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Raleway, Dosis } from "next/font/google";
import { FaQuestion } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const adlam = Raleway({ weight: ["400"], subsets: ["cyrillic-ext"] });

const Footer = () => {
  return (
    <footer
      className={`${adlam.className} bg-blue-50 dark:bg-slate-800 min-h-[50vh] `}
    >
      <div className="wrapper flex flex-col">
        <div className="w-full flex-col md:flex-row flex border-b pb-4 gap-5 ">
          <div className="flex-1  flex flex-col gap-5">
            <div className="relative w-full h-32">
              <Link
                href={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Image
                  src={"/assets/logo.svg"}
                  alt="logo"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
            <span className="text-justify  text-muted-foreground text-md">
              Welcome to classic fashion wears, your go-to destination for a
              seamless shopping experience. Navigate our site effortlessly using
              the links below to discover a world of high-quality products,
              unbeatable deals, and exceptional customer service.
            </span>
            <div className=" w-full flex-col gap-5 sm:flex-row flex justify-between">
              <span className="flex gap-2">
                <span className="h-12 w-12 border p-3 rounded-full bg-blue-200 text-blue-500 text-2xl shadow-lg">
                  <FaQuestion />
                </span>
                <span>
                  <p className="text-muted-foreground">Have a question?</p>
                  <p className="text-md text-blue-600 font-extrabold">
                    000-111-222
                  </p>
                </span>
              </span>
              <span className="flex gap-2">
                <span className="h-12 w-12 border p-3 rounded-full bg-blue-200 text-blue-500 text-2xl shadow-lg">
                  <CiMail />
                </span>
                <span>
                  <p className="text-muted-foreground">Contact us</p>
                  <p className="text-md text-blue-600 font-extrabold">
                    john.Smith@gmail.com
                  </p>
                </span>
              </span>{" "}
              <p></p>
            </div>
          </div>
          <div className="flex-1  flex flex-col gap-5">
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight flex items-center h-5 sm:h-32 ">
              Newsletter
            </h3>{" "}
            <span className="text-justify  text-muted-foreground text-md">
              Be the first one to know about discount offers weekly in your
              mailbox. Unsubscribe whenever you like with one click.
            </span>
            <div className=" w-full ">
              <span className="flex gap-2">
                <Input
                  placeholder="Enter Your Email"
                  className="rounded-full bg-slate-200 focus:border-0 dark:bg-slate-500"
                />
                <Button className="rounded-full">Submit</Button>
              </span>
            </div>
          </div>{" "}
        </div>
        <div className="pt-5 flex flex-col gap-5">
          <div className="">
            <ul className="flex flex-wrap justify-start gap-10 text-muted-foreground">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="w-full flex justify-between flex-col gap-5 md:flex-row h-full ">
            <div className="flex gap-3">
              <span className="h-12 w-12 border p-3 rounded-full bg-blue-200 text-blue-500 text-2xl shadow-lg">
                <IoCallOutline />
              </span>
              <span className="h-12 w-12 border p-3 rounded-full bg-blue-200 text-blue-500 text-2xl shadow-lg">
                <FaInstagram />
              </span>
              <span className="h-12 w-12 border p-3 rounded-full bg-blue-200 text-blue-500 text-2xl shadow-lg">
                <FaFacebook />
              </span>
            </div>
            <div className="text-muted-foreground">
              @2018-{new Date().getFullYear()}-Copyright. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
