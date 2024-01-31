import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleProduct from "./Components/SingleProduct"
import AllProducts from "./Components/AllProducts"
import NavBar from "./Components/Navbar"
function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<AllProducts/>}/>
    <Route path="/products/:id" element={<SingleProduct />} />

    <Route path="*" element={<AllProducts/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App
