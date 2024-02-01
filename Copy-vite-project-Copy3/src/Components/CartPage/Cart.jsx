import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';


export default function Cart({ cartItems, setCartItems }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPurchasing, setIsPurchasing] = useState(false);

  // I renamed totalQuantity to totalQuantityInCart to make it more obvious what it is for
  // Don't be scard of longer variable names, someteimes I have variable/function names that
  // are like 8 words combined
  const totalQuantityInCart = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  const handlePurchase = async () => {
    try {
      // Simulate payment processing
      setIsPurchasing(true);

      // 2 second delay, I know most store sites do this // what? I'm guessing it's just for a psuedo feel of it loading someting
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate a successful purchase (Please work)
      console.log('Purchase successful!');

      // Clear the cart after purchase
      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error('Error during purchase:', error);
    } finally {
      setIsPurchasing(false);
    }
  };


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <p>Total Quantity: {totalQuantityInCart}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>

      {/* Display items in the cart */}
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
      ))}

      {/* Button navigate to payment screen */}
      <Link to="/payment">
        <button onClick={handlePurchase} disabled={cartItems.length === 0 || isPurchasing}>
          {isPurchasing ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </Link>
    </div>
  );
}
