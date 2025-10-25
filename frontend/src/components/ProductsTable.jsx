// src/components/ProductsTable.jsx
import React from "react";
import { EditIcon, TrashIcon } from "./IconWrapper"; // Add these icons

const ProductRow = ({ product, onEdit,onDelete }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50">
    <td className="px-5 py-3">
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
    </td>
    <td className="px-5 py-3">
      <div className="flex items-center gap-3">
        <img
          src={product.img || "https://via.placeholder.com/40"}
          alt={product.pname || product.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium text-gray-900">{product.pname || product.name}</span>
      </div>
    </td>
    <td className="px-5 py-3 text-sm text-gray-600">{product.pid}</td>
    <td className="px-5 py-3 text-sm text-gray-600">
      <a href="#" className="text-purple-700 hover:underline">
        {product.supplierId}
      </a>
      {product.suppliers > 0 && (
        <span className="ml-1.5 inline-block px-1.5 py-0.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
          +{product.suppliers}
        </span>
      )}
    </td>
    <td className="px-5 py-3 text-sm text-gray-600">
      <a href="#" className="text-purple-700 hover:underline">
        {product.category}
      </a>
    </td>
    <td className="px-5 py-3 text-sm text-gray-600">{product.price}</td>
    <td className="px-5 py-3 text-sm text-gray-600">{product.weight}</td>
    <td className="px-5 py-3 text-sm text-gray-600">{product.stockLevel || product.stock}</td>
    <td className="px-5 py-3 text-sm text-gray-600">{product.recLevel || product.recLevel}</td>
    <td className="px-5 py-3">
      <div className="flex items-center gap-3">
        {/*
          CHANGED: Added onClick handler to the button.
          It calls the 'onEdit' function and passes this specific 'product' up.
        */}
        <button onClick={() => onEdit(product)} className="text-gray-400 hover:text-purple-600 cursor-pointer"><EditIcon /></button>
        <button onClick={() => onDelete(product)} className="text-gray-400 hover:text-red-600 cursor-pointer"><TrashIcon /></button>
      </div>
    </td>
  </tr>
);

export const ProductsTable = ({products=[], onEdit, onDelete }) => {
  const headers = [
    "Product Name",
    "Product ID",
    "Supplier ID",
    "Category",
    "Price",
    "Weight",
    "Stock Level (in units)",
    "Rec. Level (in units)",
    "Actions",
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50/50">
            <th className="px-5 py-3 text-left w-10">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
            </th>
            {headers.map((header) => (
              <th
                key={header}
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.length === 0 ? (
            <tr><td colSpan={10} className="px-5 py-6 text-center text-gray-500">No products found</td></tr>
          ) : (
            products.map((product) => (
              <ProductRow key={product._id || product.id || product.pid} product={product} onEdit={onEdit} onDelete={onDelete} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};