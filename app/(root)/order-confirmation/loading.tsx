import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex w-full flex-wrap gap-4">
      <div className="w-full md:w-7/12 flex flex-col gap-3">
        <Skeleton className="h-8 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-0.5 w-full mb-2" />
        <div className="flex justify-between mb-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-1/3" />
        </div>
        {/* Add more skeleton placeholders as needed */}
      </div>
      <div className="w-full md:w-4/12 flex flex-col gap-2">
        <div className="flex gap-2 justify-start">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-5" />
        </div>
        <Skeleton className="h-0.5 w-full mb-2" />
        {/* Add skeleton placeholders for order items */}
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
        {/* Add more skeleton placeholders as needed */}
        <div className="flex justify-between w-full">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-1/3" />
        </div>
        <Skeleton className="h-0.5 w-full mb-2" />
        <div>
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
}

export default loading;
