import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Liên Hệ Doanh Nghiệp</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center mb-4">
          <FaPhone className="text-blue-500 text-2xl mr-4" />
          <p className="text-lg font-medium">+84 123 456 789</p>
        </div>

        <div className="flex items-center mb-4">
          <FaEnvelope className="text-red-500 text-2xl mr-4" />
          <p className="text-lg font-medium">contact@company.com</p>
        </div>

        <div className="flex items-center">
          <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
          <p className="text-lg font-medium">123 Đường ABC, Quận Cam, TP.ĐH</p>
        </div>
      </div>
    </div>
  )
}

export default Services