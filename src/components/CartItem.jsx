import React from "react";

function CartItem({ item, updateQuantity, removeFromCart }) {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cart-item flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md mb-4">
      <div>
        <p className="text-lg font-medium text-gray-800">{item.title}</p>
        <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="px-2 text-gray-800 font-medium">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
