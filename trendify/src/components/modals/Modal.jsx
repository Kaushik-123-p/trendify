import React from "react";

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-0 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg sm:max-w-md mx-auto max-h-[90vh] overflow-y-auto relative">
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-700"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
