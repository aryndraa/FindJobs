import React from 'react';
import { AiOutlineCalendar, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';

const ProjectDetails = () => (
  <div className="border border-gray-300 p-6 rounded-lg text-gray-800">
    <h2 className="text-xl font-semibold mb-6">Project Details</h2>
    
    <div className="space-y-4">
      {/* Created At */}
      <div className="flex items-center">
        <AiOutlineCalendar className="mr-2 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Created At</p>
          <p className="font-medium">11 Februari 2024</p>
        </div>
      </div>
      
      {/* Total Applicants */}
      <div className="flex items-center">
        <AiOutlineUser className="mr-2 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Total Applicants</p>
          <p className="font-medium">12 Person</p>
        </div>
      </div>
      
      {/* Queue Status */}
      <div className="flex items-center">
        <AiOutlineMessage className="mr-2 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Queue Status</p>
          <p className="font-medium">Available</p>
        </div>
      </div>
      
      {/* Divider Line */}
      <hr className="my-4 border-gray-300" />

      {/* Price */}
      <div>
        <p className="text-sm text-gray-500">Price:</p>
        <p className="font-semibold text-lg text-gray-800">Rp. 320.000 - 12.000.000</p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="flex-1 flex items-center justify-center bg-primary text-white py-2 rounded-md font-semibold">
          <AiOutlineUser className="mr-2" /> Bid On Project
        </button>
        <button className="flex items-center justify-center bg-gray-100 text-gray-800 p-2 rounded-md">
          <AiOutlineMessage />
        </button>
      </div>
    </div>
  </div>
);

export default ProjectDetails;
