import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col  gap-4 ">
        <Skeleton className="w-full h-[500px" />
        <Skeleton className="w-full h-[200px]" />
      </div>
      <div className="  flex flex-col gap-4 ">
        <Skeleton className="w-full h-[500px]" />

        <Skeleton className="w-full h-[200px]" />
      </div>
    </div>
  );
}

export default loading;
