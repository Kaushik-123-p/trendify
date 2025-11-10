import React, { useState } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../assets/images/EmptyCart.webp";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main stret, 0012");
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 min-h-96 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1.5 border-r">
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button className="text-xl font-bold px-1.5 border-l">
                          +
                        </button>
                      </div>
                      <p>${(product.price * product.quantity).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md  border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex jusbtify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items: </span>
                {/* <span>{cart.products.reduce((total, product) => total + product.quantity, 0)}</span> */}
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping : </p>
                <p className="ml-2 gap-2 flex items-center">
                  Shipping to :
                  <span className="text-xs font-bold">{address}</span>
                </p>

                <button
                  className="text-blue-500 hover:underline mt-1 ml-2
                "
                >
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price: </span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen relative">
          <img
            src={EmptyCart}
            alt="Empty Cart Image"
            className="w-[800px] h-[350px] bg-no-repeat -mt-32  bg-cover"
          />
          <button
            className="mt-16 px-4 py-2 bg-red-500 text-white rounded-full absolute hover:bg-red-400 transition-colors"
            onClick={() => navigate("/")}
          >
            RETURN TO SHOPPING
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
