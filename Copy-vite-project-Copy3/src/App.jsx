import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import AllProducts from './Components/AllProducts';
import Cart from './Components/CartPage/Cart';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
// Add a NotFound component for 404 routes for style points if I want
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;