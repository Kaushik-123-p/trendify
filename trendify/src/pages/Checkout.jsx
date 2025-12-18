import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 px-4 min-h-96 md:px-16 lg:px-24 pt-32">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row md:space-x-10 mt-8">
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
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
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
                  id="payment-cod"
                  type="radio"
                  name="paymentMethod"
                  aria-label="Cash on Delivery"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="h-4 w-4"
                />
                <label
                  htmlFor="payment-cod"
                  className="block text-gray-700 ml-2"
                >
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="payment-dc"
                  type="radio"
                  name="paymentMethod"
                  aria-label="Debit Card"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                  className="h-4 w-4"
                />
                <label
                  htmlFor="payment-dc"
                  className="block text-gray-700 ml-2"
                >
                  Debit Card
                </label>
              </div>

              {paymentMethod === "dc" && (
                <div className="space-y-4 mt-4 bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Details
                  </h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Enter Card Number"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      name="cardHolderName"
                      placeholder="Enter Card Holder Name"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <div className="sm:w-1/2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div className="sm:w-1/2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="Enter CVV"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-md">{product.name}</h4>
                    <p className="text-gray-600 text-sm">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 mt-4"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
