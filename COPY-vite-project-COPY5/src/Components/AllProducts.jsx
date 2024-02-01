import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import { getProducts } from '../API';
import Cart from './CartPage/Cart';
import { useNavigate, useParams } from 'react-router-dom';

export default function GetAllProducts() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function getProductData() {
      try {
        let productsData;

        if (category) {
          // If category parameter is present, filter products by category
          const allProducts = await getProducts();
          productsData = allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
        } else {
          // If no category parameter, get all products
          productsData = await getProducts();
        }

        setProducts(productsData);
      } catch (err) {
        console.log(err);
      }
    }

    getProductData();
  }, [category]);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Select Category:
          <select
            value={selectedCategory}
            onChange={(e) => {
                setSelectedCategory(e.target.value);
                navigate(`/category/${e.target.value}`);
            }}
            >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="Jewelery">jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
            </select>
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products.map((singleProduct) => (
          <ProductCard key={singleProduct.id} item={singleProduct} />
        ))}
      </div>
    </div>
  );
}
