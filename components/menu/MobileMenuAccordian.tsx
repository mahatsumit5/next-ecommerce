import React, { Dispatch, SetStateAction } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TMenuStore } from "@/types";
import Image from "next/image";
import Link from "next/link";

function MobileMenuAccordian({
  children,
  menu,
  index,
  // getcategories,
  id,
  setIsSheetOpen,
}: {
  children: React.ReactNode;
  menu: TMenuStore[];
  index: number;
  // getcategories: (id: string, index: number) => void;
  id: string;
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger
          // onClick={() => {
          //   getcategories(id, index);
          // }}
          className="hover:no-underline"
        >
          {children}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="p-6  flex flex-row justify-between overflow-x-auto  gap-2">
            {menu[index]?.category.map((cat, index) => (
              <Link
                href={`/category/${cat.slug}`}
                key={index}
                onClick={() => {
                  setIsSheetOpen(false);
                }}
              >
                <li className=" flex   flex-col justify-between">
                  <span className="w-[100px] h-[100px] relative rounded-lg  overflow-hidden gap-2 ">
                    <Image
                      src={cat.image}
                      alt="category"
                      fill
                      className="object-cover"
                    />
                  </span>
                  <p className="text-md font-bold ">{cat.title}</p>
                </li>
              </Link>
            ))}
            {!menu[index]?.category.length && (
              <li className=" text-2xl">No items</li>
            )}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default MobileMenuAccordian;
