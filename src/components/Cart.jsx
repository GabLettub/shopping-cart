import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems =[], updateQuantity, removeFromCart }) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  return (
    <div className="cart bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="cart-summary mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
            <p className="flex justify-between text-gray-700">
              Subtotal: <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              Tax (12%): <span>${tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-lg font-semibold text-gray-800 mt-3">
              Total: <span>${total.toFixed(2)}</span>
            </p>
            <button
                onClick={() => {
                    if (navigate) navigate("/checkout");
                  }}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Check Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
