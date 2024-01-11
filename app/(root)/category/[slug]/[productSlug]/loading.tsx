import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full">
      <div className="w-full  flex-col  gap-5">
        <Skeleton className="w-full h-[60evh]" />
        <Skeleton className="w-full h-[80evh]" />
      </div>
      <div className="  w-full flex  flex-col gap-4 ">
        <Skeleton className="w-full h-[500px]" />

        <Skeleton className="w-full h-[200px]" />
      </div>
    </div>
  );
}

export default loading;
