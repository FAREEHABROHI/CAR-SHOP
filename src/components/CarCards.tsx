
import React from "react";

type CarCardProps = {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  discountedPrice?: number;
  favoriteIcon: string;
};

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  discountedPrice,
  favoriteIcon,
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl w-full md:w-[304px] min-w-[240px] md:px-5 relative border border-gray-50">
      <img
        loading="lazy"
        src={favoriteIcon}
        alt="Add to favorites"
        className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
      />
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">{type}</div>
        </div>
      </div>
      <img
        loading="lazy"
        src={image}
        alt={`${name} car`}
        className="object-contain self-center mt-16 max-w-full aspect-auto w-[204px] md:mt-10"
      />
      <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 md:mt-10">
        <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb9f5fa088a33a8329469c11ed8f42f7df3e0fd11b9aa0921af94d8d3307f051?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
            alt="Fuel icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-7">{fuelCapacity}</div>
        </div>
        <div className="flex gap-1 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/563fd9367e8be9e271233fa362e88c8b2205c920475aad51a787f2599d87477e?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
            alt="Transmission icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-12">{transmission}</div>
        </div>
        <div className="flex gap-1.5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd12c9762ffaa585959a2bb1c514f631f14a3524f88d9c2bd9d3da13bf9fa3d9?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
            alt="Capacity icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-8 w-full">
        <div className="flex flex-col font-bold text-slate-900">
          <div className="text-xl">
            ${price}.00/ <span className="text-sm text-slate-400">day</span>
          </div>
          {discountedPrice && (
            <div className="mt-1 text-sm">{discountedPrice.toLocaleString()}</div>
          )}
        </div>
        <button
          className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[40px] w-[130px] whitespace-nowrap"
          aria-label={`Rent ${name} now`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
