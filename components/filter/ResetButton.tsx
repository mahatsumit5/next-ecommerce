import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "../ui/button";
import { removeKeysFromQuery, resetFilter } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const queryKeys = ["slug", "sort", "search", "category", "limit", "size"];
function ResetButton({
  setIsReset,
}: {
  setIsReset: Dispatch<SetStateAction<boolean>>;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleReset = () => {
    // const url = removeKeysFromQuery({
    //   params: searchParams.toString(),
    //   keysToRemove: queryKeys,
    // });
    // router.push(url, { scroll: false });
    setIsReset(true);
  };

  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        handleReset();
      }}
      className="w-full rounded-full dark:bg-red-950"
    >
      Reset
    </Button>
  );
}

export default ResetButton;
