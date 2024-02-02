import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './ThankYou.css';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <h2>Thank You for Your Purchase!</h2>
      <p>We appreciate your business. Your order has been successfully processed.</p>

      {/* You can add additional content or styling as needed */}
      
      {/* Redirect back to the AllProducts page */}
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
