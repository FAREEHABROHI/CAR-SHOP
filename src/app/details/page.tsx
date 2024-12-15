'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

type CheckedOptions = {
  type: {
    sport: boolean;
    suv: boolean;
    mpv: boolean;
    sedan: boolean;
    coupe: boolean;
    hatchback: boolean;
  };
  capacity: {
    "2Person": boolean;
    "4Person": boolean;
    "6Person": boolean;
    "8OrMore": boolean;
  };
};

export default function Page() {
  const [checkedOptions, setCheckedOptions] = useState<CheckedOptions>({
    type: {
      sport: false,
      suv: false,
      mpv: false,
      sedan: false,
      coupe: false,
      hatchback: false,
    },
    capacity: {
      "2Person": false,
      "4Person": false,
      "6Person": false,
      "8OrMore": false,
    },
  });

  const [maxPrice, setMaxPrice] = useState<number>(100);

  const handleCheckboxChange = <
    T extends keyof CheckedOptions,
    K extends keyof CheckedOptions[T]
  >(
    section: T,
    name: K
  ) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: !prev[section][name],
      },
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div className='w-full flex'>
      
      <div className="w-[360px] h-[2016px] border-r-[1px] border-l-black bg-slate-200 text-black">
        <div className="p-4">
        
          <h4 className='text-gray-600'>Type</h4>
          <div className='w-[176px] h-[340px] gap-[32px]'>
            {Object.keys(checkedOptions.type).map((type) => (
              <div key={type}>
                <label className='flex items-center gap-2'>
                  <input
                    type="checkbox"
                    checked={checkedOptions.type[type as keyof CheckedOptions["type"]]}
                    onChange={() =>
                      handleCheckboxChange("type", type as keyof CheckedOptions["type"])
                    }
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)} (10)
                </label>
              </div>
            ))}
          </div>

          
          <h4 className='text-gray-600 mt-6'>Capacity</h4>
          <div className='w-[176px] h-[340px] gap-[32px]'>
            {Object.keys(checkedOptions.capacity).map((capacity) => (
              <div key={capacity}>
                <label className='flex items-center gap-2'>
                  <input
                    type="checkbox"
                    checked={checkedOptions.capacity[capacity as keyof CheckedOptions["capacity"]]}
                    onChange={() =>
                      handleCheckboxChange(
                        "capacity",
                        capacity as keyof CheckedOptions["capacity"]
                      )
                    }
                  />
                  {capacity.replace(/([A-Z])/g, " $1")} (10)
                </label>
              </div>
            ))}
          </div>

        
          <h4 className='text-gray-600 mt-6'>Price</h4>
          <div>
            <input
              type="range"
              min="0"
              max="200"
              value={maxPrice}
              onChange={handlePriceChange}
                className="w-full mt-2 accent-blue-600"
            />
            <p className='text-gray-600'>Max: ${maxPrice}.00</p>
          </div>
        </div>
      </div>

  
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className='w-full flex flex-col md:flex-row gap-5 items-center justify-around'>
          <div className='first flex flex-col gap-4 w-full lg:max-w-[470px] lg:max-h-[508px]'>
            <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between relative h-[352.43px]">
              <Image src={'/half.png'} alt='' width={492} height={360} />
            </div>
            <div className='flex items-center justify-between gap-2 lg:gap-0'>
              <Image src={'/carbeg.png'} alt='' width={148} height={124} />
              <Image src={'/Veiw1.png'} alt='' width={148} height={124} />
              <Image src={'/Veiw2.png'} alt='' width={150} height={124} />
            </div>
          </div>

          <div className="flex flex-col w-full lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
            <div className='w-[492px] h-[508px] border-r-[1px] border-l-black white-600 text-black'>
              <h1 className='line-height-48px font-bold w-700px left:24px top-[25px] mt-10 ml-7'>Nissan GT - R</h1>
              <p className='ml-4'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>

              <div className='flex gap-10'>
                <h6 className='text-gray-500 text-sm size-20px mt-7 line-hight-44 font-sans'>TypeCar</h6>
                <h6 className='text-black text-sm size-20px mt-7 line-hight-44 font-sans gap-8'>sports</h6>
                <h6 className='text-gray-500 text-sm size-20px mt-7 line-hight-44 font-sans'>Capacity</h6>
                <h6 className='text-black text-sm size-20px mt-7 line-hight-44 font-sans gap-8'>2 Person</h6>
              </div>

              <div className='flex gap-10'>
                <h6 className='text-gray-500 text-sm size-20px mt-7 line-hight-44 font-sans'>Steering</h6>
                <h6 className='text-black text-sm size-20px mt-7 line-hight-44 font-sans gap-8'>Manual</h6>
                <h6 className='text-gray-500 text-sm size-20px mt-7 line-hight-44 font-sans'>Gasoline</h6>
                <h6 className='text-black text-sm size-20px mt-7 line-hight-44 font-sans gap-8'>2 Person</h6>
              </div>

              <div className="p-7 flex items-center gap-4 mt-9 ">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                    $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
                  </h1>
                </div>
                <Link href={"/payment"}>
                  <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap text-white rounded-md w-full max-w-[180px] text-center">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        
        <section className='bg-slate-200 w-[1016px] h-[452]'>
          <div className='flex space-x-2'>
            <h2 className='font-bold'>Review</h2>
            <h1 className="bg-blue-700 font-bold text-white rounded-lg ">13</h1>
          </div>

          <section className='w-full flex items-center justify-center'>
            <div className='flex mt-8 ml-9'>
              <Image src={'/pic.png'} alt='' width={56} height={56} className='hidden md:flex rounded-full' />
              <h3 className='font-bold ml-5'>Alex Stanton</h3>
              <p className='ml-8'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
            </div>
          </section>

          <section className='w-full flex items-center justify-center'>
            <div className='flex mt-8 ml-9'>
              <Image src={'/female.jpeg'} alt='' width={56} height={56} className='hidden md:flex rounded-full' />
              <h3 className='font-bold ml-5'>Skylar Dias</h3>
              <h6 className='text-gray-400 flex'>CEO at Bukalapak</h6>
              <p className='ml-8'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
            </div>
          </section>
        </section>
            {/* <Link href={} */}
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">View All</h1>
          </Link>
        </div>
            {/* othr */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  {[
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
      name: "Nissan Altima",
      type: "Hybrid",
      image: "/blue.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 90,
      favoriteIcon: "/1white.jpg",
    },
  ].map((car) => (
    <div
      key={car.id}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      <div className="relative">
        <Image src={car.image} alt={car.name} width={400} height={300} />
        <div className="absolute top-2 right-2">
          <Image
            src={car.favoriteIcon}
            alt="favorite icon"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold">{car.name}</h3>
        <p className="text-gray-600">{car.type}</p>

        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <i className="fas fa-gas-pump"></i>
            <span>{car.fuelCapacity}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-cogs"></i>
            <span>{car.transmission}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500">{car.capacity}</p>
        <p className="text-lg font-semibold">${car.price}.00 / day</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
