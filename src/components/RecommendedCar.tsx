"use client";
import React from "react";
import CarCard from "./CarCards";

import { useRouter } from "next/navigation";

export const RecommendedCar: React.FC = () => {
  const router = useRouter(); // Corrected this line
  const cars = [
    {
      id:1,
      name: "Tesla Model 3",
      type: "Electric",
      image: "/blue.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 100,
      favoriteIcon: "/1white.jpg",
    },
    {
      id:2,
      name: "Ford Mustang",
      type: "Gasoline",
      image: "/brown.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80,
      favoriteIcon: "/1white.jpg",
    },
    {
      id:3,
      name: "BMW X5",
      type: "Diesel",
      image: "/white.png",
      fuelCapacity: "70 L",
      transmission: "Automatic",
      capacity: "7 seats",
      price: 150,
      favoriteIcon: "/red.jpeg",
    },
    {
      id:4,
      name: "Audi A6",
      type: "Hybrid",
      image: "/darkblue.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 120,
      favoriteIcon: "/1white.jpg",
    },
    {
      id:5,
      name: "Mercedes-Benz C-Class",
      type: "Gasoline",
      image: "/half.png",
      fuelCapacity: "65 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 140,
      favoriteIcon: "/1white.jpg",
    },
    {
      id:6,
      name: "Porsche 911",
      type: "Gasoline",
      image: "/short.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 200,
      favoriteIcon: "/1white.jpg",
    },
    {
      id:7,
      name: "Chevrolet Camaro",
      type: "Gasoline",
      image: "/short2.png",
      fuelCapacity: "70 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 110,
      favoriteIcon: "/1white.jpg",
    },
    {
      id:8,
      name: "Nissan Altima",
      type: "Hybrid",
      image: "/blue.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 90,
      favoriteIcon: "/1white.jpg",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 md:p-8">
      <h2 className="text-lg font-semibold text-slate-900 text-left mb-6 md:text-xl">
        Recommended Car
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>

      
      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push("/details")} 
          className="px-6 py-3 text-base font-medium text-white bg-[#3563E9] rounded-md hover:bg-[#274bc9] transition duration-300 w-full max-w-[200px]"
        >
          Show more cars
        </button>
      </div>
    </div>
  );
};

export default RecommendedCar;
