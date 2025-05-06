import React from 'react';
import Button from '../atoms/Button';

const HomePage: React.FC = () => (
  <section className="w-full flex flex-col items-center justify-center">
    <div className="w-full max-w-2xl mx-auto relative bg-gradient-to-br from-purple-200 to-pink-100 rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center min-h-[50vh] mb-12 mt-8">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-purple-900 drop-shadow-lg text-center">
        Velvet Secrets
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl text-center">
        Discover unique finds, curated collections, and quality products. Shop with confidence and
        style.
      </p>
      <Button className="mt-2 px-10 py-4 text-lg bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg text-white transition-all duration-200">
        Shop Now
      </Button>
    </div>
  </section>
);

export default HomePage;
