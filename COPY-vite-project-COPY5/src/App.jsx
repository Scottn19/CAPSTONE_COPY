import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import AllProducts from './Components/AllProducts';
import Cart from './Components/CartPage/Cart';
import Login from './Components/LoginPage/Login';
import Payment from './Components/PaymentPage/Payment';
import NavBar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/category/:category" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
