import React from 'react';

const Delivery = () => {
  return (
    <div className="flex items-center p-10 bg-gray-100 ">
      <div className="flex items-center space-x-4 border-2 border-green-400 p-4 rounded-md">
        {/* Pick-Up Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 h-16px">
          Pick-Up
        </button>

        {/* Location Dropdown */}
        <div>
          <label htmlFor="locations" className="sr-only">Locations</label>
          <select
            id="locations"
            className="border-gray-300 border rounded p-2 focus:ring-2 focus:ring-green-500"
            defaultValue="" // Set defaultValue for the dropdown
          >
            <option value="" disabled>
              Location
            </option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            <option value="city3">City 3</option>
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label htmlFor="date" className="sr-only">Date</label>
          <input
            type="date"
            id="date"
            className="border-gray-300 border rounded p-2 focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Time Input */}
        <div>
          <label htmlFor="time" className="sr-only">Time</label>
          <input
            type="time"
            id="time"
            className="border-gray-300 border rounded p-2 focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
