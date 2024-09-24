// src/components/PropertyCard.tsx
import React from 'react';
import { Property } from '../utils/mockData';

interface PropertyCardProps {
  property: Property;
  onBook: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onBook }) => {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.title} style={{ width: '100%', height: 'auto' }} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>₹{property.price}/night</p> {/* Display price with ₹ symbol */}
      <button onClick={() => onBook(property)}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
