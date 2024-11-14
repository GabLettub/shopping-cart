import React from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cartItems, resetCart }) {
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePay = () => {
    alert("Payment Successful");
    resetCart();
    navigate("/"); // Redirect to the main page
  };

  return (
    <div className="container mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between py-3 border-b border-gray-600"
              >
                <span>{item.title}</span>
                <span>
                  Quantity: {item.quantity} - Price: $
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-right text-xl font-semibold">
            Total: ${total.toFixed(2)}
          </p>
          <div className="mt-6 flex justify-between gap-4">
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-500"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500"
              onClick={handlePay}
            >
              Pay
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
