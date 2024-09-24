// src/components/PropertyListings.tsx
import React from 'react';
import { properties } from '../utils/mockData';
import PropertyCard from './PropertyCard';

interface PropertyListingsProps {
  onBook: (property: typeof properties[number]) => void;
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ onBook }) => {
  return (
    <div>
      <h2>Available Properties</h2>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} onBook={onBook} />
      ))}
    </div>
  );
};

export default PropertyListings;
