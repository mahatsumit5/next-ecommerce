"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HiSun } from "react-icons/hi";
import { Button } from "../ui/button";
import { BsMoonStarsFill } from "react-icons/bs";
export function ThemeChanger({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <div className="">
      {theme === "light" ? (
        <Button
          variant={"link"}
          className="text-3xl animate-spin hover:animate-ping"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <HiSun color="orange" />
        </Button>
      ) : (
        <Button
          variant={"link"}
          className={`text-2xl animate-bounce hover:animate-ping ${
            theme === "light" && "animate-ping"
          }`}
          onClick={() => {
            setTheme("light");
          }}
        >
          <BsMoonStarsFill color="skyblue" />
        </Button>
      )}
    </div>
  );
}
