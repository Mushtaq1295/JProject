// src/pages/ProductsPage.jsx
import React from "react";
// import { ProductsHeader } from "../components/ProductsHeader";
import { ProductsToolbar } from "../components/ProductsToolbar.jsx";
import { ProductsTable } from "../components/ProductsTable";
import { Pagination } from "../components/Pagination";
// import { DashboardHeader } from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { TimeFilter } from "../components/TimeFilter.jsx";
import { SelectDateButton } from "../components/SelectDateBtn.jsx";

export const ProductsPage = () => {
  return (
    // 1. Add a wrapper div with 'flex' to hold both components
    <div className="flex min-h-screen bg-gray-50/50">
      
      {/* 2. Render Sidebar as the first child */}
      <Sidebar />

      {/* 3. Render <main> as the second child */}
    <main className="flex-1 p-6 ml-64">
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Products</h1>
            <div className="flex items-center gap-3">
                <TimeFilter />
                <SelectDateButton />
            </div>
        </div>
        {/* } */}
        

        {/* <div className="flex items-center justify-between w-full mb-3">
            
        </div> */}

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