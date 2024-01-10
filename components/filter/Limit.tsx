import React, { useState } from "react";
import ReuseableFilter from "./ReusableFilterComponent";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Limit = ({ total }: { total: number }) => {
  const [limit, setLimit] = useState<string>("");
  return (
    <ReuseableFilter name="limit" query={limit}>
      <div className="w-full filter-components">
        {" "}
        <Select
          onValueChange={(e) => {
            setLimit(e);
          }}
        >
          <SelectTrigger className="w-full border-none shadow-md">
            <SelectValue placeholder="Limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array(total > 8 ? 8 : total)
                .fill("")
                .map((item, index) => (
                  <SelectItem value={index + 1 + ""} key={index}>
                    {index + 1}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </ReuseableFilter>
  );
};

export default Limit;
