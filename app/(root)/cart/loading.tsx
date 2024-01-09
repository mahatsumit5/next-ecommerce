import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex w-full flex-wrap gap-4">
      <Skeleton className="w-full h-[500px]" />
      <Skeleton className="w-full h-[500px]" />
    </div>
  );
}

export default loading;
