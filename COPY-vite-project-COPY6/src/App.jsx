import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './Components/Pages/SingleProductPage';
import AllProducts from './Components/Pages/AllProductsPage';
import Cart from './Components/Pages/CartPage/Cart';
import Login from './Components/Pages/LoginPage/Login';
import Payment from './Components/Pages/PaymentPage/Payment';
import Navbar from './Components/NavBar/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] =useState(null);
  useEffect (() => {const localToken = localStorage.getItem("token");
  if (localToken) setToken(localToken)
}, [])
  useEffect (() => {
    if (token){
    console.log("gettingCart")
    const localCart=localStorage.getItem("cart");
if(!localCart){localStorage.setItem("cart",JSON.stringify([]))}else {setCartItems(JSON.parse(localCart))}
    }
}, [token]) 
  return (
    <BrowserRouter>
      <Navbar token={token} setToken={setToken} setCartItems={setCartItems} /> 
      <Routes>
        <Route path="/" element={<AllProducts setCartItems={setCartItems} cartItems={cartItems}/>} />
        <Route path="/category/:category" element={<AllProducts setCartItems={setCartItems} cartItems={cartItems}/>} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart setCartItems={setCartItems} cartItems={cartItems}/>} />
        <Route path="/login" element={<Login setToken={setToken} token={token}/>} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
