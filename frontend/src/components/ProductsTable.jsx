// src/components/ProductsTable.jsx
import React from "react";
import { EditIcon, TrashIcon } from "./IconWrapper"; // Add these icons

// Mock Data based on your image
const products = [
  {
    id: "1",
    img: "https://via.placeholder.com/40x40.png?text=DV",
    name: "Droned Vape",
    productId: "TUX001234",
    supplierId: "REMA0123",
    suppliers: 5,
    category: "Traditional Vapes",
    price: "$4500",
    weight: "3 lb",
    stock: "12000",
    recLevel: "15000",
  },
  {
    id: "2",
    img: "https://via.placeholder.com/40x40.png?text=CE",
    name: "Crosscut E-Cig",
    productId: "TUX001234",
    supplierId: "REMA0123",
    suppliers: 0,
    category: "E-Cigarettes",
    price: "$4500",
    weight: "3 lb",
    stock: "12000",
    recLevel: "15000",
  },
  {
    id: "3",
    img: "https://via.placeholder.com/40x40.png?text=CU",
    name: "Cultyvate",
    productId: "TUX001234",
    supplierId: "REMA0123",
    suppliers: 5,
    category: "Edibles",
    price: "$4500",
    weight: "3 lb",
    stock: "12000",
    recLevel: "15000",
  },
  // ... add the rest of your data
];

const ProductRow = ({ product, onEdit }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50">
    <td className="px-5 py-3">
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
    </td>
    <td className="px-5 py-3">
      <div className="flex items-center gap-3">
        <img
          src={product.img}
          alt={product.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium text-gray-900">{product.name}</span>
      </div>
    </td>
    <td className="px-5 py-3 text-sm text-gray-600">{product.productId}</td>
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
    <td className="px-5 py-3 text-sm text-gray-600">{product.stock}</td>
    <td className="px-5 py-3 text-sm text-gray-600">{product.recLevel}</td>
    <td className="px-5 py-3">
      <div className="flex items-center gap-3">
        {/*
          CHANGED: Added onClick handler to the button.
          It calls the 'onEdit' function and passes this specific 'product' up.
        */}
        <button
          onClick={() => onEdit(product)}
          className="text-gray-400 hover:text-purple-600 cursor-pointer"
        >
          <EditIcon />
        </button>
        <button className="text-gray-400 hover:text-red-600 cursor-pointer">
          <TrashIcon />
        </button>
      </div>
    </td>
  </tr>
);

export const ProductsTable = ({ onEdit }) => {
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
          {products.map((product) => (
            // CHANGED: Pass the 'onEdit' prop down to the ProductRow
            <ProductRow
              key={product.id}
              product={product}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};