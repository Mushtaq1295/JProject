import { useState } from "react";
import React from "react";
import { CalendarIcon, FilterIcon, PlusIcon } from "../components/IconWrapper";
import { SelectDateButton } from "./SelectDateBtn";
import { AddMetricsButton } from "./AddMetricsBtn";
import { FilterButton } from "./FilterButton";
import { TimeFilter } from "./TimeFilter";

export const DashboardHeader = () => {
  // const timeFilters = ["1d", "7d", "1m", "3m", "6m", "1y", "3y"];
  // const [activeFilter, setActiveFilter] = useState("1m");

  return (
    <>
      {/* This is the parent flex container with justify-between */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <div className="flex items-center  bg-white rounded-lg p-1 text-sm w-full sm:w-fit overflow-x-auto">
          <TimeFilter/>
        </div>
        {/* Item 1: Action Buttons (now a direct child) */}
        <div className="flex items-center gap-2">
          <AddMetricsButton/>
          <FilterButton/>
          <SelectDateButton/>
        </div>
      </div>
    </>
  );
};