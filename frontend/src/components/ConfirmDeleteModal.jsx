// src/components/ConfirmDeleteModal.jsx
import React from "react";
import { AlertTriangleIcon, CloseIcon } from "./IconWrapper"; // Add AlertTriangleIcon to your wrapper

export const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
  itemType = "item", // Default item type
}) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center"
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 bg-white rounded-xl shadow-2xl w-full max-w-md"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Delete {itemType}?
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex items-start gap-4">
          {/* Warning Icon */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
            <AlertTriangleIcon className="w-6 h-6 text-red-600" />
          </div>
          {/* Message */}
          <div className="flex-1">
            <h3 className="text-md font-medium text-gray-900">
              Are you sure?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Are you sure you want to delete{" "}
              <strong className="font-semibold">{itemName}</strong>? This action
              cannot be undone.
            </p>
          </div>
        </div>

        {/* Footer with Buttons */}
        <div className="flex justify-end gap-3 p-4 bg-gray-50 rounded-b-xl border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 shadow-sm cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};