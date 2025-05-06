import React from 'react';

const AboutPage: React.FC = () => (
  <div className="flex justify-center items-center min-h-[40vh]">
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full border border-purple-100">
      <h1 className="text-3xl font-bold mb-4 text-purple-800">About Us</h1>
      <p className="text-gray-700 mb-2">
        Velvet Secrets is your go-to shop for unique finds and quality products.
      </p>
      <p className="text-gray-500">
        We believe in making shopping delightful, easy, and inspiring. Our team curates every item
        with care and passion for quality.
      </p>
    </div>
  </div>
);

export default AboutPage;
