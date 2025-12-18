import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newproduct = products.find((product) => product.id === parseInt(id));
    console.log(typeof id);
    setProduct(newproduct);
  }, [id, products]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto pt-32 py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="py-4 shadow-md md:px-8 flex justify-center w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain max-h-96"
          />
        </div>

        <div className="md:w-1/2 w-full p-4 shadow-md md:p-16 flex flex-col items-start gap-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            {product.name}
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-2">
            <input
              type="number"
              id="quantity"
              min="1"
              className="border p-1 w-full sm:w-16 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button className="w-full sm:w-auto bg-red-600 text-white py-2 px-5 hover:bg-red-800 rounded">
              Add to cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mt-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product description will goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
