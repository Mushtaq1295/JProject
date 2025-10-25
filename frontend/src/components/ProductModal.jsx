// src/components/ProductModal.jsx
import React, { useState, useEffect } from "react";
import {
  CloseIcon,
  PlusIcon,
  UploadIcon,
  ChevronDownIcon,
} from "./IconWrapper"; // Add CloseIcon/ChevronDownIcon to your wrapper

// Reusable form row components
const FormRow = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
);

const FormField = ({ label, htmlFor, children }) => (
  <div className="flex flex-col">
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-gray-700 mb-1.5"
    >
      {label}
    </label>
    {children}
  </div>
);

const TextInput = ({ id, placeholder, value, onChange }) => (
  <input
    type="text"
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

// --- Main Modal Component ---
export const ProductModal = ({ isOpen, onClose, productToEdit }) => {
  const [formData, setFormData] = useState({});

  // When 'productToEdit' changes, pre-fill the form
  useEffect(() => {
    if (productToEdit) {
      setFormData({
        productName: productToEdit.name,
        supplierId: productToEdit.supplierId,
        category: productToEdit.category,
        weight: productToEdit.weight,
        // ... fill all other fields from your product object
        sku: "RTY1234455", // Placeholder
        barcode: "QWERTY0987", // Placeholder
      });
    } else {
      // Clear form for "Add New"
      setFormData({
        productName: "",
        supplierId: "",
        category: "Vapes",
        dimensionUnit: "inch",
        // ... clear all other fields
      });
    }
  }, [productToEdit, isOpen]); // Re-run when the modal opens or product changes

  // Simple handler to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  const title = productToEdit ? "Edit product" : "Add new product";
  const buttonText = productToEdit ? "Save Changes" : "Add Product";

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
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
              <PlusIcon /> Add Custom Field
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
              <UploadIcon /> Bulk Upload
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form
          className="p-6 space-y-6 overflow-y-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Row 1 */}
          <FormRow>
            <FormField label="Product Name" htmlFor="productName">
              <TextInput
                id="productName"
                name="productName"
                placeholder="Ex: BoomHigh"
                value={formData.productName || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Supplier ID" htmlFor="supplierId">
              <TextInput
                id="supplierId"
                name="supplierId"
                placeholder="Ex: TUW10234"
                value={formData.supplierId || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Weight (in lbs)" htmlFor="weight">
              <TextInput
                id="weight"
                name="weight"
                placeholder="Enter Weight here"
                value={formData.weight || ""}
                onChange={handleChange}
              />
            </FormField>
          </FormRow>

          {/* Row 2 */}
          <FormRow>
            <FormField label="Category" htmlFor="category">
              <TextInput
                id="category"
                name="category"
                placeholder="Ex: Vapes"
                value={formData.category || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Dimension Unit" htmlFor="dimensionUnit">
              <SelectInput
                id="dimensionUnit"
                name="dimensionUnit"
                value={formData.dimensionUnit || "inch"}
                onChange={handleChange}
              >
                <option value="inch">inch</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
              </SelectInput>
            </FormField>
            <FormField
              label="Dimensions (L x B x H)"
              htmlFor="dimensions"
            >
              <TextInput
                id="dimensions"
                name="dimensions"
                placeholder="Ex: 20 x 30 x 40"
                value={formData.dimensions || ""}
                onChange={handleChange}
              />
            </FormField>
          </FormRow>

          {/* Row 3 */}
          <FormRow>
            <FormField
              label="Recorded Stock Level"
              htmlFor="stockLevel"
            >
              <TextInput
                id="stockLevel"
                name="stockLevel"
                placeholder="Ex: 2000"
                value={formData.stockLevel || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField
              label="Warning Threshold Stock Level"
              htmlFor="warnThreshold"
            >
              <TextInput
                id="warnThreshold"
                name="warnThreshold"
                placeholder="Ex: 100"
                value={formData.warnThreshold || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField
              label="Auto Order Stock Level"
              htmlFor="autoOrderLevel"
            >
              <TextInput
                id="autoOrderLevel"
                name="autoOrderLevel"
                placeholder="Ex: 50"
                value={formData.autoOrderLevel || ""}
                onChange={handleChange}
              />
            </FormField>
          </FormRow>

          {/* Row 4 */}
          <FormRow>
            <FormField label="SKU Code" htmlFor="sku">
              <TextInput
                id="sku"
                name="sku"
                placeholder="RTY1234455"
                value={formData.sku || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Barcode Number" htmlFor="barcode">
              <TextInput
                id="barcode"
                name="barcode"
                placeholder="QWERTY0987"
                value={formData.barcode || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField
              label="GRN Number (Optional)"
              htmlFor="grn"
            >
              <TextInput
                id="grn"
                name="grn"
                placeholder="QWERTY56787"
                value={formData.grn || ""}
                onChange={handleChange}
              />
            </FormField>
          </FormRow>

          {/* Row 5 - Image, Price, Margin */}
          <FormRow>
            <FormField
              label="Insert Image (400px x 400px)"
              htmlFor="imageUpload"
            >
              <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-purple-500 cursor-pointer">
                <PlusIcon className="w-8 h-8" />
                <span className="text-sm">Click to upload</span>
              </div>
            </FormField>
            <FormField
              label="Purchasing Price"
              htmlFor="purchasePrice"
            >
              <TextInput
                id="purchasePrice"
                name="purchasePrice"
                placeholder="Ex: $100"
                value={formData.purchasePrice || ""}
                onChange={handleChange}
              />
            </FormField>
            <FormField
              label="Selling Price Margin"
              htmlFor="sellMargin"
            >
              <TextInput
                id="sellMargin"
                name="sellMargin"
                placeholder="Ex: 20%"
                value={formData.sellMargin || ""}
                onChange={handleChange}
              />
            </FormField>
          </FormRow>

          {/* Row 6 - Description */}
          <FormField
            label="Product Description"
            htmlFor="description"
          >
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="Type something about product here"
              value={formData.description || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 text-sm"
            ></textarea>
          </FormField>
        </form>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};