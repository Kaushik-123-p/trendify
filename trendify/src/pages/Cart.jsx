import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/images/EmptyCart.webp";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/modals/Modal";
import ChangeAddress from "../components/modals/ChangeAddress";
import {
  decreaseQuantity,
  incressQuantity,
  removeFromCart,
} from "../redux/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main stret, 0012");
  const [isChangeAddressModalOpen, setIsChangeAddressModalOpen] =
    useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto py-8 px-4 min-h-screen md:px-16 lg:px-24 pt-24 md:pt-40">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col lg:flex-row lg:space-x-10 mt-8">
            <div className="lg:w-2/3">
              <div className="hidden sm:flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-12">
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
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 border-b gap-3"
                  >
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <div className="mt-2 sm:hidden text-sm text-gray-600 space-y-1">
                          <div>Price: ${product.price}</div>
                          <div>Quantity: {product.quantity}</div>
                          <div>
                            Subtotal: $
                            {(product.price * product.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex  sm:flex-row sm:space-x-14 items-start sm:items-center space-y-3 sm:space-y-0 text-sm">
                      <p className="hidden sm:block">${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-lg font-bold px-2 border-r"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-lg px-3">{product.quantity}</p>
                        <button
                          className="text-lg font-bold px-2 border-l"
                          onClick={() => dispatch(incressQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                      <p className="hidden sm:block">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <button
                        className="text-red-500 hover:text-red-700 p-1 ml-2 text-xl md:-ml-10"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/3  bg-white p-4 rounded-lg shadow-md border mt-10 mx-auto lg:mt-0">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
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
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsChangeAddressModalOpen(true)}
                >
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price: </span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal
            isModelOpen={isChangeAddressModalOpen}
            setIsModelOpen={setIsChangeAddressModalOpen}
          >
            <ChangeAddress
              setAddress={setAddress}
              setIsChangeAddressModalOpen={setIsChangeAddressModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
          <img
            src={EmptyCart}
            alt="Empty Cart Image"
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto object-contain mb-8"
          />
          <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors"
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
