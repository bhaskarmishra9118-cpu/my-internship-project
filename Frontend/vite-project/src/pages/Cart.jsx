import React from "react";

function Cart({ cartItems = [], onContinueShopping }) {
  const total = cartItems.reduce((s, it) => s + (it.price || 0), 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-none p-0">
            {cartItems.map((p, i) => (
              <li key={i} className="flex gap-3 items-center my-2">
                <img src={p.image} alt={p.name} width={60} height={60} className="object-cover w-16 h-16 rounded" onError={(e) => e.target.src = "https://via.placeholder.com/60"} />
                <div>
                  <div className="font-bold">{p.name}</div>
                  <div>₹{p.price}</div>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="mt-3 font-semibold">Total: ₹{total}</h3>
        </div>
      )}
      <button onClick={onContinueShopping} className="mt-3 px-3 py-1 bg-gray-200 rounded">Continue Shopping</button>
    </div>
  );
}

export default Cart;