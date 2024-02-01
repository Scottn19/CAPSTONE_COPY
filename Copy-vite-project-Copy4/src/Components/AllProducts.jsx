// AllProducts.jsx
import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import { getProducts } from '../API';
import Cart from './CartPage/Cart';

export default function GetAllProducts() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function getProductData() {
      try {
        const products = await getProducts(selectedCategory);
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    }

    getProductData();
  }, [selectedCategory]);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Select Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products.map((SingleProduct) => (
          <ProductCard key={SingleProduct.id} item={SingleProduct} />
        ))}
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
}
