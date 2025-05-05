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
  </Router>
);

export default App;
