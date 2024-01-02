import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectQuantityProps = {
  setOrderQty: Dispatch<SetStateAction<number>>;
  qty: number;
};
function SelectQuantity({ setOrderQty, qty }: SelectQuantityProps) {
  let quantiy = [];
  for (let i = 1; i <= qty; i++) {
    quantiy.push(i);
  }
  return (
    <Select
      onValueChange={(e) => {
        setOrderQty(Number(e));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a quantity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Quantity</SelectLabel>
          {quantiy.map((qty) => (
            <SelectItem value={`${qty}`}>{qty}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectQuantity;
