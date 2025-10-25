// src/components/Pagination.jsx
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./IconWrapper"; // Add these icons

export const Pagination = () => (
  <div className="flex flex-col md:flex-row justify-between md:items-center px-5 py-4 border-t border-gray-200 bg-white rounded-b-lg shadow-sm">
    <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm mb-3 md:mb-0">
      <ArrowLeftIcon />
      Previous
    </button>
    
    <nav className="flex items-center gap-1">
      <button className="px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100 text-gray-900">1</button>
      <button className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50">2</button>
      <button className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50">3</button>
      <span className="px-3 py-1.5 text-sm text-gray-600">...</span>
      <button className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50">8</button>
      <button className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50">9</button>
      <button className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50">10</button>
    </nav>
    
    <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm mt-3 md:mt-0">
      Next
      <ArrowRightIcon />
    </button>
  </div>
);