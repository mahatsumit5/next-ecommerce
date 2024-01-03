"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

export function ThemeChanger({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  return (
    <div className={`mt-2 ${className}`}>
      <Switch
        onCheckedChange={(e) => {
          if (e) {
            setTheme("dark");
            return;
          }
          setTheme("light");
        }}
      />
    </div>
  );
}
