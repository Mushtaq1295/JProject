// src/components/SearchBar.jsx
import React from "react";
import { SearchIcon } from "./IconWrapper"; // Make sure path is correct

export const SearchBar = () => (
  <div className="relative w-full md:w-64">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <SearchIcon className="text-gray-400" />
    </div>
    <input
      type="text"
      placeholder="Search"
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-1 focus:ring-[#6941C6] focus:border-[#6941C6]"
    />
  </div>
);