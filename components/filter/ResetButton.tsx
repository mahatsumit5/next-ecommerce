import React from "react";
import { Button } from "../ui/button";
import { removeKeysFromQuery, resetFilter } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

function ResetButton({ clearFilerOnReset }: { clearFilerOnReset: () => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleReset() {
    clearFilerOnReset();
    router.push(resetFilter(searchParams.toString()), { scroll: false });
  }
  return (
    <Button
      variant={"destructive"}
      onClick={handleReset}
      className="w-full rounded-full dark:bg-red-950"
    >
      Reset
    </Button>
  );
}

export default ResetButton;
