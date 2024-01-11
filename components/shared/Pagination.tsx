"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function ProductPagination({ count }: { count: number }) {
  const array: string[] = [];
  for (let i = 1; i <= count; i++) {
    array.push(i + "");
  }
  const [page, setPage] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (page) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "page",
          value: page,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: true });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [page, searchParams, router]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          onClick={() => {
            if (page === array[0]) {
              return;
            }
            setPage(Number(page) - 1 + "");
          }}
        />
        {array.map((value) => (
          <PaginationItem
            value={value}
            key={value}
            onClick={(e) => {
              setPage(value);
            }}
          >
            <PaginationLink isActive={value === page}>{value}</PaginationLink>
          </PaginationItem>
        ))}

        <PaginationNext
          onClick={() => {
            if (page === array[array.length - 1]) {
              return;
            }
            setPage(Number(page) + 1 + "");
          }}
        />
      </PaginationContent>
    </Pagination>
  );
}
