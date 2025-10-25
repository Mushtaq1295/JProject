// src/components/ProductModal.jsx
import React, { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../services/products.js";
import {
  CloseIcon,
  PlusIcon,
  UploadIcon,
  ChevronDownIcon,
} from "./IconWrapper"; // ensure these exist in IconWrapper

// Simple input components
const TextInput = ({ id, placeholder, value, onChange, type = "text" }) => (
  <input
    type={type}
    id={id}
    name={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 text-sm"
  />
);

const SelectInput = ({ id, value, onChange, children }) => (
  <div className="relative">
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 text-sm appearance-none"
    >
      {children}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <ChevronDownIcon className="text-gray-400" />
    </div>
  </div>
);

// layout helpers
const FormRow = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
);

const FormField = ({ label, htmlFor, children }) => (
  <div className="flex flex-col">
    <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700 mb-1.5">
      {label}
    </label>
    {children}
  </div>
);

// Main exported modal
export const ProductModal = ({ isOpen, onClose, productToEdit, onSaved }) => {
  // default shape uses backend keys
  const emptyForm = {
    pname: "",
    pid: "",
    supplierId: "",
    category: "",
    price: "",
    weight: "",
    stockLevel: "",
    recLevel: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fill form when editing; clear when adding
  useEffect(() => {
    if (productToEdit) {
      setFormData({
        pname: productToEdit.pname ?? productToEdit.name ?? "",
        pid: productToEdit.pid ?? productToEdit.productId ?? "",
        supplierId: productToEdit.supplierId ?? "",
        category: productToEdit.category ?? "",
        price: productToEdit.price ?? "",
        weight: productToEdit.weight ?? "",
        stockLevel: productToEdit.stockLevel ?? productToEdit.stock ?? "",
        recLevel: productToEdit.recLevel ?? productToEdit.recordedLevel ?? "",
      });
    } else {
      setFormData(emptyForm);
    }
    setError("");
  }, [productToEdit, isOpen]); // re-run when modal opens or product changes

  // convert numeric fields to numbers
  const numericFields = ["price", "weight", "stockLevel", "recLevel"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  // submit handler (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // basic client-side validation
    if (!formData.pname || !formData.pid || !formData.supplierId || !formData.category) {
      setError("Please fill Product Name, Product ID, Supplier ID and Category.");
      return;
    }

    // ensure numeric fields are numbers (or 0)
    const payload = {
      ...formData,
      price: formData.price === "" ? 0 : Number(formData.price),
      weight: formData.weight === "" ? 0 : Number(formData.weight),
      stockLevel: formData.stockLevel === "" ? 0 : Number(formData.stockLevel),
      recLevel: formData.recLevel === "" ? 0 : Number(formData.recLevel),
    };

    try {
      setSaving(true);
      if (productToEdit && productToEdit._id) {
        await updateProduct(productToEdit._id, payload);
      } else {
        await createProduct(payload);
      }

      // notify parent to refresh
      if (onSaved) await onSaved();
      // close modal
      if (onClose) onClose();
    } catch (err) {
      console.error("Save error:", err);
      setError(err?.response?.data?.message || err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  // close early if not open
  if (!isOpen) return null;

  const title = productToEdit ? "Edit product" : "Add new product";
  const buttonText = saving ? (productToEdit ? "Saving..." : "Adding...") : productToEdit ? "Save Changes" : "Add Product";

  return (
    // Backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center"
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        className="relative z-50 bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm"
            >
              <PlusIcon /> Add Custom Field
            </button>

            {/* Uncomment if bulk upload needed */}
            {/* <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
              <UploadIcon /> Bulk Upload
            </button> */}

            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form className="p-6 space-y-6 overflow-y-auto" onSubmit={handleSubmit}>
          {error && <div className="text-sm text-red-600">{error}</div>}

          {/* Row 1 */}
          <FormRow>
            <FormField label="Product Name" htmlFor="pname">
              <TextInput id="pname" placeholder="Ex: BoomHigh" value={formData.pname} onChange={handleChange} />
            </FormField>

            <FormField label="Product Id" htmlFor="pid">
              <TextInput id="pid" placeholder="Ex: BH12345" value={formData.pid} onChange={handleChange} />
            </FormField>

            <FormField label="Supplier ID" htmlFor="supplierId">
              <TextInput id="supplierId" placeholder="Ex: TUW10234" value={formData.supplierId} onChange={handleChange} />
            </FormField>
          </FormRow>

          {/* Row 2 */}
          <FormRow>
            <FormField label="Category" htmlFor="category">
              <TextInput id="category" placeholder="Ex: Vapes" value={formData.category} onChange={handleChange} />
            </FormField>

            <FormField label="Price" htmlFor="price">
              <TextInput id="price" placeholder="Ex: 200" type="number" value={formData.price} onChange={handleChange} />
            </FormField>

            <FormField label="Weight (in units)" htmlFor="weight">
              <TextInput id="weight" placeholder="Enter Weight" type="number" value={formData.weight} onChange={handleChange} />
            </FormField>
          </FormRow>

          {/* Row 3 */}
          <FormRow>
            <FormField label="Stock Level" htmlFor="stockLevel">
              <TextInput id="stockLevel" placeholder="Ex: 2000" type="number" value={formData.stockLevel} onChange={handleChange} />
            </FormField>

            <FormField label="Rec Level" htmlFor="recLevel">
              <TextInput id="recLevel" placeholder="Ex: 100" type="number" value={formData.recLevel} onChange={handleChange} />
            </FormField>

            {/* empty column for spacing on larger screens */}
            <div />
          </FormRow>
        </form>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          <button
            onClick={handleSubmit}
            type="button"
            disabled={saving}
            className="w-full py-3 px-4 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-60 cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
