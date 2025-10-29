import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const InfoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Fast Shipping",
      description: "Get your orders delivered quickly and reliably.",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We're here to help you with any questions or concerns.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Affordable Prices",
      description: "We offer competitive pricing on all our products.",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Secure Payments",
      description: "Your payment information is safe and secure with us.",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Best Deals",
      description: "Get the best deals on our products.",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {InfoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            {item.icon}

            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
