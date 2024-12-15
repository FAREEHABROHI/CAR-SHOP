import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-blue-700 text-white rounded-lg p-6 flex flex-col justify-between relative">
          <div>
            <h2 className="text-2xl font-bold">The Best Platform for Car Rental</h2>
            <p className="mt-2 text-sm">
              Ease of doing car rental safely and reliably. Of course at a low price.
            </p>
          </div>
          <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-md mt-6 self-start hover:bg-gray-100">
            Rental Car
          </button>
          <div className="absolute bottom-4 right-4">
            <Image
              src="/car1.png"
              alt="Car showcasing the best platform for car rental"
              width={320}
              height={240}
              priority
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between relative h-[352.43px]">
          <div>
            <h2 className="text-2xl font-bold">Easy way to rent a car at a low price</h2>
            <p className="mt-2 text-sm">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
          </div>
          <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md mt-6 self-start hover:bg-gray-100">
            Rental Car
          </button>
          <div className="absolute bottom-4 right-4">
            <Image
              src="/car2.png"
              alt="Affordable and easy car rental options"
              width={320}
              height={240}
              priority
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
