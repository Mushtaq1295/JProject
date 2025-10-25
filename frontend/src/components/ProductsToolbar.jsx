// src/components/ProductsToolbar.jsx
import React from "react";
import { SearchBar } from "./SearchBar";
import { FilterButton } from "./FilterButton";
import { ExportButton } from "./ExportButton";
import { AddProductButton } from "./AddProductButton";

export const ProductsToolbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-3">
      {/* Left Side: Search and Filters */}
      <div className="flex items-center gap-3">
        <SearchBar />
        <FilterButton />
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex items-center gap-3">
        <ExportButton />
        <AddProductButton />
      </div>
    </div>
  );
};