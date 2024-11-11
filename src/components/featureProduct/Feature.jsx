import React from "react";

export default function Feature() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/1920x1080')` }}>
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">Our Exclusive Product</h1>
        
        {/* Bar */}
        <div className="w-16 h-1 bg-red-500 mt-4 mb-10"></div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg">
          {["Product One", "Product Two", "Product Three"].map((product, index) => (
            <div key={index} className="flex flex-col items-center bg-white text-center rounded-lg shadow-lg p-6 text-gray-800">
              
              {/* Product Title */}
              <h2 className="text-2xl font-bold text-red-500 mb-4">{product}</h2>
              
              {/* Product Image */}
              <img
                src="https://via.placeholder.com/300x200"
                alt={product}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
