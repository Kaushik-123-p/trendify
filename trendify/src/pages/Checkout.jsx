import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  return (
    <div className="container mx-auto py-8 px-4 min-h-96 md:px-16 lg:px-24 pt-32">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "block" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          <div className="border p-2 mb-6 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="font-semibold text-lg mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "block" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          <div className="border p-2 mb-6 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "block" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="h4 w-4"
                />
                <label className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                  className="h4 w-4"
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md  border"></div>
      </div>
    </div>
  );
};

export default Checkout;
