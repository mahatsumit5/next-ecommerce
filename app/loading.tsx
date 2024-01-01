import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-12 w-full " />
      <Skeleton className="h-full rounded-sm" />
    </div>
  );
}

export default loading;
