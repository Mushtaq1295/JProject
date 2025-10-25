import { useState } from "react";
import React from "react";
import { CalendarIcon, FilterIcon, PlusIcon } from "../components/IconWrapper";

export const DashboardHeader = () => {
  const timeFilters = ["1d", "7d", "1m", "3m", "6m", "1y", "3y"];
  const [activeFilter, setActiveFilter] = useState("1m");

  return (
    <>
      {/* This is the parent flex container with justify-between */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        
        {/* REMOVED the wrapper div that was here */}

        {/* Item 2: Time Filter Buttons (now a direct child) */}
        <div className="flex items-center border border-gray-200 bg-white rounded-lg p-1 text-sm w-full sm:w-fit overflow-x-auto">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
                filter === activeFilter
                  ? "bg-gray-100 font-medium shadow-sm"
                  : "hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Item 1: Action Buttons (now a direct child) */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            <PlusIcon /> Add Metrics
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            <CalendarIcon /> Select dates
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            <FilterIcon /> Filters
          </button>
        </div>
      </div>
    </>
  );
};