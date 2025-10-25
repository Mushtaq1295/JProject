// src/pages/ProductsPage.jsx
import React from "react";
// import { ProductsHeader } from "../components/ProductsHeader";
import { ProductsToolbar } from "../components/ProductsToolbar";
import { ProductsTable } from "../components/ProductsTable";
import { Pagination } from "../components/Pagination";
import { DashboardHeader } from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

export const ProductsPage = () => {
  return (
    // 1. Add a wrapper div with 'flex' to hold both components
    <div className="flex min-h-screen bg-gray-50/50">
      
      {/* 2. Render Sidebar as the first child */}
      <Sidebar />

      {/* 3. Render <main> as the second child */}
      {/* 4. ADD 'ml-64' HERE to offset it from the 256px (w-64) sidebar */}
      <main className="flex-1 p-6 ml-64">
         <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Products
        </h1>
        {/* REMOVED: <Sidebar /> from inside <main> */}
        
        {/* 1. Header (Title + Time Filters) */}
        <DashboardHeader />

        {/* 2. Toolbar (Search, Filters, Actions) */}
        <ProductsToolbar />

        {/* 3. Products Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <ProductsTable />
        </div>

        {/* 4. Pagination */}
        <Pagination />
      </main>
    </div>
  );
};

export default ProductsPage;