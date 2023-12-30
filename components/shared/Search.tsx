import React, { useState } from "react";
import { Input } from "../ui/input";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex-1">
      <Input
        placeholder={"search..."}
        type={"text"}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-full rounded-full shadow-lg border-none focus:border-slate-400"
      />
    </div>
  );
};

export default Search;
