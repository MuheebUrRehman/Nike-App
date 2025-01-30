"use client";
import React, { useState } from "react";
import { useProductContext } from "@/app/context/ProductContext";

const Search = () => {
  const { searchQuery, setSearchQuery } = useProductContext();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setSearchQuery(localSearchQuery);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={localSearchQuery}
        className="font-medium text-[#CCCCCC] w-[100%] bg-transparent"
        onChange={(e) => setLocalSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </>
  );
};

export default Search;
