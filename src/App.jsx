import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './CartContext'; 
import ProductPage from './ProductPage';  
import CartPage from './CartPage';  
import './Navbar.css';  

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="navbar">
          <div className="logo">My Store</div>
          <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
