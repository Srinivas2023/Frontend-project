// totality-frontend-challenge/src/app/page.tsx
"use client"; // Make this a Client Component

import React, { useState } from 'react';
import PropertyListings from './components/PropertyListings'; // Adjusted path
import Cart from './components/Cart'; // Adjusted path
import Checkout from './components/Checkout'; // Ensure this is implemented
import { Property } from './utils/mockData'; // Adjusted path

const HomePage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Property[]>([]);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const handleBook = (property: Property) => {
    setCartItems([...cartItems, property]);
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckoutClick = () => {
    setIsCheckoutVisible(true);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Property Rental Platform</h1>
      <PropertyListings onBook={handleBook} />
      <Cart cartItems={cartItems} onRemove={handleRemove} />
      {cartItems.length > 0 && (
        <button onClick={handleCheckoutClick}>Proceed to Checkout</button>
      )}
      {isCheckoutVisible && <Checkout totalAmount={totalAmount} />}
    </div>
  );
};

export default HomePage;
