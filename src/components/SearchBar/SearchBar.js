import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <div className="flex flex-row  border rounded border-teal-400 w-full">
        <FaSearch size={20} className=" p-1  h-9 w-9 " />
        <input
          id="search"
          type="text"
          placeholder="Search..."
          className="py-2 w-11/12 px-3 h-9 border border-none outline-none text-black font-mono"
        />
      </div>
    </>
  );
}

export default SearchBar;
