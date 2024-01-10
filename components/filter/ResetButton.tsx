import React from "react";
import { Button } from "../ui/button";
import { removeKeysFromQuery, resetFilter } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

function ResetButton() {
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleReset() {
    router.push(resetFilter(searchParams.toString()), { scroll: false });
  }
  return (
    <Button variant={"destructive"} onClick={handleReset} className="w-full">
      Reset
    </Button>
  );
}

export default ResetButton;
