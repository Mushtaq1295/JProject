import { useState } from "react";
import React from "react";
import { CalendarIcon, FilterIcon, PlusIcon } from "../components/IconWrapper";
import { SelectDateButton } from "./SelectDateBtn";
import { AddMetricsButton } from "./AddMetricsBtn";
import { FilterButton } from "./FilterButton";

export const TimeFilter = () => {
  const timeFilters = ["1d", "7d", "1m", "3m", "6m", "1y", "3y"];
  const [activeFilter, setActiveFilter] = useState("1m");

  return (
    <>
        <div className="flex items-center border border-gray-200 bg-white rounded-lg p-1 text-sm w-full sm:w-fit overflow-x-auto">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer ${
                filter === activeFilter
                  ? "bg-gray-100 font-medium shadow-sm"
                  : "hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
    </>
  );
};