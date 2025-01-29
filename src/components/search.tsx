"use client";
import React from "react";
import { useProductContext } from "@/app/context/ProductContext";

const Search = () => {
  const { setSearchQuery } = useProductContext();

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="font-medium text-[#CCCCCC] w-[100%] bg-transparent"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </>
  );
};

export default Search;
