import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsChangeAddressModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setAddress(newAddress);
    setIsChangeAddressModalOpen(false);
  };
  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor="newAddress" className="sr-only">
        New address
      </label>
      <input
        id="newAddress"
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 gap-2">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded w-full sm:w-auto"
          onClick={() => setIsChangeAddressModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
