import React from "react";

function ProductItem({ product, addToCart }) {
  const defaultImage = "https://via.placeholder.com/150";

  return (
    <div className="bg-gray-100 rounded-lg p-4 text-center shadow-md hover:shadow-lg hover:transform hover:-translate-y-1 transition duration-300">
      <img
        src={product.images && product.images[0] ? product.images[0] : defaultImage}
        alt={product.title || "Product"}
        className="w-full h-auto rounded-md mb-2"
      />
      <h4 className="text-lg font-semibold text-gray-800 mb-1">
        {product.title || "No Title Available"}
      </h4>
      <p className="text-sm text-gray-600 mb-3">Price: ${product.price ?? "N/A"}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-gray-800 text-white py-2 px-4 rounded-md w-full hover:bg-gray-600 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
