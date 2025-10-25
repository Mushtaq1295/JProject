// src/components/SelectDateButton.jsx
import React from "react";
import { CalendarIcon } from "./IconWrapper"; // Make sure path is correct

export const SelectDateButton = () => (
  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm cursor-pointer">
    <CalendarIcon />
    select dates
  </button>
);
