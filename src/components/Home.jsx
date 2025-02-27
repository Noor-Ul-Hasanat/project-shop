import React from 'react';
import image from '../Pictures/35-service.png';
import ceoImage from '../Pictures/ceo-picture.jpg'; // Replace with actual CEO image

export default function Home() {
  return (
    <div className=" w-full min-h-screen bg-gray-800 text-white ">
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-shop-pic opacity-30 w-full min-h-screen">
        
      </div> */}

      {/* 35 Years Image at Top-Left */}
      <div className="hidden md:flex absolute top-4 left-[17%] ">
        <img
          src={image}
          alt="Celebrating 35 Years of Excellence"
          className="h-40 w-auto  border-4 border-gray-700 rounded-lg"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* CEO Image */}
        <div className="pb-6 pt-3">
          <img
            src={ceoImage}
            alt="CEO"
            className="h-48 w-48 rounded-full shadow-lg border-4 border-gray-700"
          />
        </div>

        {/* Shop Owner's Message */}
        <div className="max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 text-center h-full mb-3 mx-2">
          <h2 className="text-2xl font-bold mb-4">A Message from the Owner</h2>
          <p className="text-gray-300 text-lg leading-relaxed ">
            "For 35 years, we have been dedicated to serving our customers with trust, excellence, and an unwavering
             commitment to quality. This milestone is not just a celebration of our journey but also a heartfelt tribute
              to the vision of my father, Qaiser Khan, whose determination laid the foundation of this business.<br/>
              I am equally grateful to my elder brother Johar Ali, whose resilience and perseverance through countless challenges
              have been an inspiration and a driving force in our success. Their sacrifices and hard work have shaped
               what we are today.<br/>
            To our loyal customers, you are the cornerstone of this journey. Your trust and support have been our
             greatest strength. As we look forward to the future, we remain committed to upholding the values and 
             excellence that define us. Here's to many more years of shared success and growth!"
          </p>
        </div>
      </div>
    </div>
  );
}
