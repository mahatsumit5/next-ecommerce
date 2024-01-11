import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "../ui/button";
import { removeKeysFromQuery, resetFilter } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReducerDispatch } from "@/types";
import { ACTIONS } from "@/lib/constants";

const queryKeys = [
  "slug",
  "sort",
  "search",
  "category",
  "limit",
  "size",
  "price_range",
];
function ResetButton({ dispatch }: { dispatch: Dispatch<ReducerDispatch> }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleReset = () => {
    dispatch({ payload: "", type: ACTIONS.RESET });
    // const url = removeKeysFromQuery({
    //   params: searchParams.toString(),
    //   keysToRemove: queryKeys,
    // });
    // router.push(url, { scroll: false });
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
