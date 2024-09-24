// src/pages/index.tsx
import React, { useState } from 'react';
import PropertyListings from '../components/PropertyListings';
import Cart from '../components/Cart';
import { Property } from '../utils/mockData';

const HomePage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Property[]>([]);

  const handleBook = (property: Property) => {
    setCartItems([...cartItems, property]);
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Property Rental Platform</h1>
      <PropertyListings onBook={handleBook} />
      <Cart cartItems={cartItems} onRemove={handleRemove} />
    </div>
  );
};

export default HomePage;
