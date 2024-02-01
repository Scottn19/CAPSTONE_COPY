import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import AllProducts from './Components/AllProducts';
import NotFound from './Components/NotFound'; // Add a NotFound component for 404 routes
import Navbar from './Components/Navbar'; // Rename NavBar to Navbar

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />

        {/* Trying a Route for handling a 404 Not Found error*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;