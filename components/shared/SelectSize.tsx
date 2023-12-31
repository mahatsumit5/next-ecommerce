import React, { Dispatch, SetStateAction } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function SelectSize({
  sizes,
  setSize,
  width,
}: {
  sizes: string[];
  setSize: Dispatch<SetStateAction<string>>;
  width: string;
}) {
  return (
    <Select
      onValueChange={(e) => {
        setSize(e);
      }}
    >
      <SelectTrigger className={width}>
        <SelectValue placeholder="Select a Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available Sizes</SelectLabel>
          {sizes.map((size) => (
            <SelectItem value={size} className="uppercase">
              {size}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectSize;
