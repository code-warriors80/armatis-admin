// components/ConfirmModal.tsx
import React from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmModal({
  isOpen,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  onConfirm,
  onCancel,
  loading = false,
  confirmText = "Yes",
  cancelText = "Cancel",
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl p-8 w-96 max-w-full text-center animate-fade-in">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-8">{message}</p>
        <div className="flex justify-center gap-6">
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Processing..." : confirmText}
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 text-gray-900 font-semibold px-6 py-2 rounded-lg transition"
            disabled={loading}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
