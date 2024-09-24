// totality-frontend-challenge/src/app/components/Checkout.tsx
"use client"; // Ensure this is a client-side component

import React, { useState } from 'react';

interface CheckoutProps {
  totalAmount: number;
}

const Checkout: React.FC<CheckoutProps> = ({ totalAmount }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed! Total: $${totalAmount}`);
    // Implement further checkout logic here
  };

  return (
    <form onSubmit={handleCheckout}>
      <h2>Checkout</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Payment Info:
        <input type="text" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} required />
      </label>
      <h4>Total Amount: ${totalAmount}</h4>
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default Checkout;
