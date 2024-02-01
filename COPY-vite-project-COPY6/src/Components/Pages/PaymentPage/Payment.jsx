import './Payment.css';

export default function Payment() {
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>This is the payment screen. Add your payment form or relevant content here.</p>

      {/* Add your payment form here */}
      <form>
        {/* Payment form fields go here */}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}
