import React from "react";
import { Skeleton } from "../ui/skeleton";

function LoadingSkeleton() {
  return (
    <>
      {Array(5)
        .fill("")
        .map(() => (
          <div className=" mt-1 flex gap-2 w-full">
            <Skeleton className="w-10 h-10 rounded-md" />
            <Skeleton className="w-full h-[10px] mt-5 " />
          </div>
        ))}
    </>
  );
}

export default LoadingSkeleton;
