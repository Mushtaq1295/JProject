// src/pages/ProductsPage.jsx
import React, { useState } from "react";
import { ProductsToolbar } from "../components/ProductsToolbar.jsx";
import { ProductsTable } from "../components/ProductsTable";
import { Pagination } from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import { TimeFilter } from "../components/TimeFilter.jsx";
import { SelectDateButton } from "../components/SelectDateBtn.jsx";
import { ProductModal } from "../components/ProductModal.jsx"; // CHANGED: Import the modal

export const ProductsPage = () => {
  // --- State for the modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  // --- Handlers for opening/closing the modal ---
  const handleOpenAddModal = () => {
    setProductToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setProductToEdit(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProductToEdit(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />

      <main className="flex-1 p-6 ml-64">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <div className="flex items-center gap-3">
            <TimeFilter />
            <SelectDateButton />
          </div>
        </div>
        
        {/* CHANGED: Pass the 'handleOpenAddModal' function as a prop */}
        <ProductsToolbar onAddProduct={handleOpenAddModal} />

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* CHANGED: Pass the 'handleOpenEditModal' function as a prop */}
          {/* Make sure your ProductsTable component accepts 'onEdit' */}
          <ProductsTable onEdit={handleOpenEditModal} />
        </div>

        <Pagination />
      </main>

      {/* CHANGED: Render the modal component */}
      {/* It will only be visible when 'isModalOpen' is true */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productToEdit={productToEdit}
      />
    </div>
  );
};

export default ProductsPage;