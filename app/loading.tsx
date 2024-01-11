import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full">
        <Skeleton className="h-24 w-full " />;
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Skeleton className="h-[60vh] w-full " />
        <Skeleton className="h-[80vh] w-full " />
      </div>
      <div className="w-full">
        <Skeleton className="h-[20vh] w-full " />
      </div>
    </div>
  );
}

export default loading;
