import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BarChart, DonutChart, SalesChart, SankeyChart, StatCard, StatsGrid } from "../components/Cards";
import { DashboardHeader } from "../components/DashboardHeader";

// --- Main Dashboard Page Component ---
export const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <MainContent />
    </div>
  );
};


// --- Main Content Area ---
const MainContent = () => {
  return (
    <main className="flex-1 p-6 lg:p-8 overflow-y-auto ml-64">
       <div className="p-0 mb-6 flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, Olivia
        </h1>
      </div>
      
      <DashboardHeader />
      <StatsGrid />
      <SalesChart />
      <SankeyChart />
      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
        <DonutChart />
        <BarChart />
      </div>
    </main>
  );
};



export default DashboardPage;