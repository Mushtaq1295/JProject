// src/components/ProductsToolbar.jsx
import React from "react";
import { SearchBar } from "./SearchBar";
import { FilterButton } from "./FilterButton";
import { ExportButton } from "./ExportButton";
import { AddProductButton } from "./AddProductButton";

// CHANGED: Accept 'onAddProduct' as a prop
export const ProductsToolbar = ({ onAddProduct }) => {
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
        {/* CHANGED: Pass the 'onAddProduct' function to the button's 'onClick' */}
        <AddProductButton onClick={onAddProduct} />
      </div>
    </div>
  );
};