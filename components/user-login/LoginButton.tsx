import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function LoginButton() {
  return (
    <>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              card: "dark:bg-slate-600 z-50 border-white ",
              button: "text-blue-500",
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <Button className="rounded-full " variant="default" size={"sm"}>
          <Link href={"/sign-in"}>Login</Link>
        </Button>
      </SignedOut>
    </>
  );
}

export default LoginButton;
