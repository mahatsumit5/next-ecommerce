import React from "react";
import { Skeleton } from "../ui/skeleton";

function HeaderMenuLoading() {
  return (
    <div className="flex gap-5 flex-col justify-start lg:flex-row">
      {Array(5)
        .fill("")
        .map(() => (
          <Skeleton className="w-full lg:w-24 h-10 bg-slate-300 dark:bg-slate-600" />
        ))}
    </div>
  );
}

export default HeaderMenuLoading;
