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
              card: "dark:bg-slate-400/90  dark:text-white z-50 ",
              button: "text-blue-500",
            },
          }}
          userProfileUrl="fgdfg"
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
