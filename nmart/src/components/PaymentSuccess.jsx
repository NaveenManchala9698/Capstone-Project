import "../css/PaymentPage.css";

const PaymentSuccess = () => {
  return (
    <div className="success-body">
      <div className="success-card">
        <div className="checkmark-bg">
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your Payment;
          <br /> check your mail for order details.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
