// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from "react";
import { ProductsToolbar } from "../components/ProductsToolbar.jsx";
import { ProductsTable } from "../components/ProductsTable";
import { Pagination } from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import { TimeFilter } from "../components/TimeFilter.jsx";
import { SelectDateButton } from "../components/SelectDateBtn.jsx";
import { ProductModal } from "../components/ProductModal.jsx"; // CHANGED: Import the modal
import { ConfirmDeleteModal } from "../components/ConfirmDeleteModal.jsx";

import { fetchProducts, deleteProduct } from "../services/products.js";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // --- State for the modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  // --- STATE FOR DELETE MODAL ---
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await fetchProducts();
      // backend returns { message, data } so we read res.data.data
      const data = res?.data?.data ?? res?.data;
      setProducts(data);
    } catch (err) {
      setError(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);


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

  // --- HANDLERS FOR DELETE MODAL ---
  const handleOpenDeleteModal = (product) => {
    setItemToDelete(product); // Store the product to be deleted
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setItemToDelete(null); // Clear the product
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await deleteProduct(itemToDelete._id);
      // optimistically remove from UI
      setProducts((prev) => prev.filter((p) => p._id !== itemToDelete._id));
      handleCloseDeleteModal();
    } catch (err) {
      alert("Delete failed: " + (err?.response?.data?.message || err.message));
    }
  };

  // Called after create/update to refresh list
  const onSaved = async () => {
    await loadProducts();
    handleCloseModal();
  };

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
        {/* 2. Toolbar (Search, Filters, Actions) */}
        <ProductsToolbar 
        onAddProduct={handleOpenAddModal}
         />

        {/* 3. Products Table */}
       <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {loading ? (
            <div className="p-6">Loading products…</div>
          ) : error ? (
            <div className="p-6 text-red-600">Error: {error}</div>
          ) : (
            <ProductsTable products={products} onEdit={handleOpenEditModal} onDelete={handleOpenDeleteModal} />
          )}
        </div>

        <Pagination />
      </main>

      {/* Render the Add/Edit Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productToEdit={productToEdit}
        onSaved={onSaved}
      />

      {/* Render the Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        itemName={itemToDelete?.pname || itemToDelete?.name}
        itemType="product"
      />
    </div>
  );
};

export default ProductsPage;