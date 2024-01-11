import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="gap-5  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid justify-items-center ">
      {Array(5)
        .fill("")
        .map((item, index) => (
          <Skeleton
            className="w-[150px] h-[280px] sm:w-[180px] sm:h-[280px] md:w-[250px]"
            key={index}
          />
        ))}
    </div>
  );
}

export default loading;
