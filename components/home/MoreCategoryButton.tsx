"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function MoreCategoryButton({ total }: { total: number }) {
  const [skip, setSkip] = useState<number>(0);
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    let url = "";
    if (skip) {
      url = formUrlQuery({
        key: "skip",
        params: searchParams.toString(),
        value: skip + "",
      });
    } else {
      url = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["skip"],
      });
    }
    router.push(url, { scroll: false });
  }, [skip]);
  return (
    <>
      <Button
        variant={"default"}
        disabled={skip === 0}
        onClick={() => {
          setSkip(skip - 1);
        }}
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        variant={"primary"}
        disabled={skip === total}
        onClick={() => {
          setSkip(skip + 1);
        }}
      >
        <ArrowRightIcon />
      </Button>
    </>
  );
}

export default MoreCategoryButton;
