import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './Components/Pages/SingleProductPage';
import AllProducts from './Components/Pages/AllProductsPage';
import Cart from './Components/Pages/CartPage/Cart';
import Login from './Components/Pages/LoginPage/Login';
import ThankYou from './Components/Pages/ThankYouPage/ThankYou'; // Import your ThankYou component
import Navbar from './Components/NavBar/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(null);

  // Retrieve cart items from localStorage on initial load
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(localCart);
  }, []);

  // Retrieve token from localStorage on initial load
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  // Update cartItems when token changes
  useEffect(() => {
    if (token) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(localCart);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Navbar token={token} setToken={setToken} setCartItems={setCartItems} />
      <Routes>
        <Route path="/" element={<AllProducts setCartItems={setCartItems} cartItems={cartItems} />} />
        <Route path="/category/:category" element={<AllProducts setCartItems={setCartItems} cartItems={cartItems} />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart setCartItems={setCartItems} cartItems={cartItems} />} />
        <Route path="/login" element={<Login setToken={setToken} setCartItems={setCartItems}  token={token} />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
