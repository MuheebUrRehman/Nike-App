"use client";
import { useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
      <div className="w-[180px] h-[40px] bg-[#F5F5F5] rounded-full flex items-center px-2 justify-between">
        <FontAwesomeIcon icon={faSearch} className=" text-xl cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="font-medium text-[#CCCCCC] w-[80%] bg-transparent"
        />
      </div>
    </>
  );
};

export default Search;
