import React from 'react';
import { Car } from '../../types/car';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{car.name}</h3>
        <div className="mt-2 space-y-1">
          <p className="text-blue-600 font-bold">{car.price}</p>
          <p className="text-gray-600">Year: {car.year}</p>
          <p className="text-gray-600">Mileage: {car.mileage}</p>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;