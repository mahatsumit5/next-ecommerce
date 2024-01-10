import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="gap-10  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid justify-items-center   sm:gap-10 md:gap-16">
      {Array(5)
        .fill("")
        .map((item, index) => (
          <Skeleton className="w-[300px] h-[500px]" key={index} />
        ))}
    </div>
  );
}

export default loading;
