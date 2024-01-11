import React, { Dispatch, SetStateAction } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MobileFilterAccordian({ children }: { children: React.ReactNode }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="filter">
        <AccordionTrigger className="hover:no-underline dark:text-blue-300 text-center">
          Filter products
        </AccordionTrigger>
        <AccordionContent className="">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default MobileFilterAccordian;
