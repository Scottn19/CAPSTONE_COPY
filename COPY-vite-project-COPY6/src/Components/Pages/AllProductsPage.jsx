import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../API';
import Cart from './CartPage/Cart';
import { useNavigate, useParams } from 'react-router-dom';

// ... existing imports ...

export default function AllProducts({cartItems, setCartItems}) {
  const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  const { category = '' } = useParams(); // Use default value for category
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function getProductData() {
      try {
        let productsData;

        if (category) {
          // If category parameter is present, filter products by category
          const allProducts = await getProducts();
          productsData = allProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase());
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

  const addToCart = (item) => {
    console.log("addToCart")
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const result = localCart.find(product=>product.id == item.id);
    if (result){result.quantity += 1;
      const otherItems = localCart.filter(product => product.id != item.id);
      const updatedCart = [...otherItems, result];
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else { 
      item.quantity = 1;
      const updatedCart = [...cartItems, item];
      // Update the cart items
      setCartItems(updatedCart);
      // add additional logic here, like showing a notification of it working or something
      console.log('Added to cart:', item);
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    
    } 
  };
  console.log(cartItems)
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Select Category:
          <select
            value={category || selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              navigate(`/category/${e.target.value}`);
            }}
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="Jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products.map((singleProduct) => (
          <ProductCard key={singleProduct.id} item={singleProduct} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
