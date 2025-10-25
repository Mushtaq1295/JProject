// src/components/FilterButton.jsx
import React from "react";
import { FilterIcon } from "./IconWrapper"; // Make sure path is correct

export const FilterButton = () => (
  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm cursor-pointer">
    <FilterIcon />
    Filters
  </button>
);