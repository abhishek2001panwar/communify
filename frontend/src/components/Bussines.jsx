import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi'; // Import location marker icon

const Business = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Business Name</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis justo nec magna vestibulum posuere. 
          Phasellus sodales magna quis arcu sagittis, et mattis libero dignissim. 
        </p>
        <div className="flex items-center mt-4">
          <HiOutlineLocationMarker className="h-6 w-6 mr-2" /> {/* Location marker icon */}
          <span className="text-gray-700 text-base">123 Main Street, City, State</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Business;