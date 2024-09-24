// totality-frontend-challenge/src/app/components/Cart.tsx
"use client"; // Ensure this is a client-side component

import React from 'react';
import { Property } from '../utils/mockData';

interface CartProps {
  cartItems: Property[];
  onRemove: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>${item.price}/night</p>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}
          <h4>Total: ${total}</h4>
        </div>
      ) : (
        <p>No properties booked yet.</p>
      )}
    </div>
  );
};

export default Cart;
