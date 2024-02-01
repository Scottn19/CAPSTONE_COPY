import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductCard/ProductCard';
import './Cart.css';

export default function Cart({ cartItems = [], setCartItems }) {
  const [isPurchasing, setIsPurchasing] = useState(false);

  console.log("cartItems:", cartItems);

  // Calculate total quantity and price
  const totalQuantityInCart = Array.isArray(cartItems)
  ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
  : 0;

const totalPrice = Array.isArray(cartItems)
  ? cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0)
  : 0;


  {Array.isArray(cartItems) && cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <p>{item.title}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
    </div>
  ))}

  const handlePurchase = async () => {
    try {
      if (cartItems.length === 0) {
        console.error('Cannot proceed with an empty cart.');
        return;
      }

      // Simulate payment processing
      setIsPurchasing(true);

      // Simulate a successful purchase
      console.log('Purchase successful!');

      // Clear the cart after purchase
      setCartItems([]);
    } catch (error) {
      console.error('Error during purchase:', error);
    } finally {
      setIsPurchasing(false);
    }
  };
  const deleteProductFromCart =  (item)=>  {
  const response = confirm("Are you sure you want to delete from cart")
  if (response)
  {const updatedCart = cartItems.filter(product=>product.id!=item.id)
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCartItems(updatedCart);}
}


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
          <button onClick={()=>{deleteProductFromCart(item)}}>Delete from cart</button>

        </div>
      ))}

      {/* navigate to payment screen */}
      <Link to="/payment" disabled={cartItems.length === 0 || isPurchasing}>
        <button onClick={handlePurchase} disabled={cartItems.length === 0 || isPurchasing}>
          {isPurchasing ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </Link>
    </div>
  );
}