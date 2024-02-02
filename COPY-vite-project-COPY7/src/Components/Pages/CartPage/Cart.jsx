import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../../ProductCard/ProductCard';
import './Cart.css';

export default function Cart({ cartItems = [], setCartItems }) {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const navigate = useNavigate();

  const totalQuantityInCart = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
    : 0;

  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0)
    : 0;

  const deleteProductFromCart = (item, quantityToRemove) => {
    const response = window.confirm(`Are you sure you want to remove ${quantityToRemove} ${item.title}(s) from the cart?`);

    if (response) {
      const updatedCart = cartItems.map((product) => {
        if (product.id === item.id) {
          const updatedQuantity = product.quantity - quantityToRemove;
          return { ...product, quantity: Math.max(updatedQuantity, 0) };
        }
        return product;
      });

      const filteredCart = updatedCart.filter((product) => product.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(filteredCart));
      setCartItems(filteredCart);
    }
  };

  const clearCart = () => {
    const response = window.confirm('Are you sure you want to remove all items from the cart?');

    if (response) {
      localStorage.removeItem("cart");
      setCartItems([]);
    }
  };

  const removeAllOfProduct = (productId) => {
    const response = window.confirm(`Are you sure you want to remove all ${cartItems.find(item => item.id === productId).title}(s) from the cart?`);

    if (response) {
      const updatedCart = cartItems.filter((product) => product.id !== productId);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const proceedToThankYou = () => {
    // Clear the cart before navigating to Thank You
    localStorage.removeItem("cart");
    setCartItems([]);
    // Navigate to the Thank You page
    navigate('/thankyou');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <p>Total Quantity: {totalQuantityInCart}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <button onClick={() => deleteProductFromCart(item, 1)}>Remove 1 from cart</button>
          <button onClick={() => removeAllOfProduct(item.id)}>Remove All of this product</button>
        </div>
      ))}

      <div>
        <button onClick={clearCart}>Clear Cart</button>
      </div>

      <Link to="/thankyou" onClick={proceedToThankYou}>
        <button disabled={cartItems.length === 0 || isPurchasing}>
          {isPurchasing ? 'Processing...' : 'Checkout'}
        </button>
      </Link>
    </div>
  );
}
