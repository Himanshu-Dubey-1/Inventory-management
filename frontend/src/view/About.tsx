import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
        {/* Banner Image */}
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.dealpos.com%2Fwp-content%2Fuploads%2F2022%2F05%2FInventory-Management.jpg&f=1&nofb=1&ipt=5571e36ca3c76d2b2bc743dafdb6c87496a5b30a91fd5f3b9c7657f26e4ca7f0&ipo=images"
          alt="Inventory Management"
          className="w-full h-fit object-cover rounded-md mb-6 shadow-md"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About Our Inventory Management Application
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to our <strong>Inventory Management Application</strong>, a powerful and user-friendly solution designed
          to help businesses efficiently track, manage, and optimize their inventory operations.
        </p>

        {/* Key Features Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3043/3043933.png"
              alt="Real-time Tracking"
              className="w-16 h-16 object-contain"
            />
            <p className="text-gray-600">📦 Real-time Inventory Tracking</p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3063/3063399.png"
              alt="Barcode Scanning"
              className="w-16 h-16 object-contain"
            />
            <p className="text-gray-600">🔍 Barcode & QR Code Scanning</p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
              alt="Analytics"
              className="w-16 h-16 object-contain"
            />
            <p className="text-gray-600">📊 Advanced Reporting & Analytics</p>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2906/2906276.png"
              alt="Stock Replenishment"
              className="w-16 h-16 object-contain"
            />
            <p className="text-gray-600">🔄 Automatic Stock Replenishment</p>
          </div>
        </div>

        {/* Our Mission */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600">
          Our goal is to simplify inventory management, reduce errors, and enhance operational efficiency. We strive to
          provide a robust, scalable, and intuitive platform that meets the needs of modern businesses.
        </p>

        {/* Contact Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          Have questions or feedback? Contact our support team at{" "}
          <a href="mailto:support@inventoryapp.com" className="text-blue-500 hover:underline">
            support@inventoryapp.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
