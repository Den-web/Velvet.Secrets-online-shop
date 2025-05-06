import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShopPage from './components/pages/ShopPage';

const App: React.FC = () => (
  <Router>
    <MainTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </MainTemplate>
    <footer className="mt-16 py-8 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-neutral-800 dark:to-neutral-900 text-center text-gray-600 border-t border-purple-100 w-full">
      <div className="w-full px-6">
        <div className="mb-2 font-semibold text-purple-800 dark:text-purple-200">
          Velvet Secrets &copy; {new Date().getFullYear()}
        </div>
        <div className="space-x-6">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/shop" className="hover:underline">
            Shop
          </a>
          <a
            href="https://github.com/den/Velvet.Secrets-online-shop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  </Router>
);

export default App;
