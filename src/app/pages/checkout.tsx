// src/pages/checkout.tsx
import React from 'react';
import Checkout from '../components/Checkout';
import { Property } from '../utils/mockData';

const CheckoutPage: React.FC = () => {
  // Example cartItems. Replace with actual state management.
  const cartItems: Property[] = []; // Populate this with actual cart items

  return (
    <div>
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default CheckoutPage;
