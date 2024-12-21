import React from 'react';

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  year: number;
  mileage: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Tesla Model 3',
    price: '$42,990',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800',
    year: 2024,
    mileage: '0 miles',
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    price: '$48,500',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    year: 2024,
    mileage: '12 miles',
  },
  {
    id: 3,
    name: 'Mercedes-Benz C-Class',
    price: '$52,700',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    year: 2024,
    mileage: '5 miles',
  },
  {
    id: 4,
    name: 'Audi A4',
    price: '$46,200',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800',
    year: 2024,
    mileage: '8 miles',
  },
];

const CarGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
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
      ))}
    </div>
  );
};

export default CarGrid;