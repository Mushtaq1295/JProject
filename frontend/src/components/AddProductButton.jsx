// src/components/AddProductButton.jsx
import React from "react";
import { PlusIcon } from "./IconWrapper"; // You'll need to add this icon

export const AddProductButton = () => (
  <button className="flex items-center gap-2 px-4 py-2 bg-[#6941C6] text-white rounded-lg text-sm font-medium hover:bg-[#52339d] shadow-sm cursor-pointer">
    <PlusIcon />
    Add New Product
  </button>
);