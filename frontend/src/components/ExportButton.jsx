// src/components/ExportButton.jsx
import React from "react";
import { UploadIcon } from "./IconWrapper"; // You'll need to add this icon

export const ExportButton = () => (
  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm cursor-pointer">
    <UploadIcon />
    Export
  </button>
);