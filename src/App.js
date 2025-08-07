import React from 'react';
import ProductQuantity from './components/setPrice/ProductQuantity';
import Home from './components/Home/Home.js'
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/price" element={<ProductQuantity />} />
        </Routes>
          
        </Router>
    </div>
  );
}
      
export default App;
