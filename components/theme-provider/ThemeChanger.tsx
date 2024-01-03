"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

export function ThemeChanger({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  return (
    <div className={` w-16  rounded-full ${className}`}>
      <Switch
        onCheckedChange={(e) => {
          if (e) {
            setTheme("dark");
            return;
          }
          setTheme("light");
        }}
        className="w-full h-9 dark:bg-slate-500"
      />
    </div>
  );
}
