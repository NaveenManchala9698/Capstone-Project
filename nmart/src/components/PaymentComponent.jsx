import { Apple, CreditCard, Paypal } from "react-bootstrap-icons";
import { CardElement } from "@stripe/react-stripe-js";
import "../css/PaymentPage.css";
import { Link } from "react-router-dom";

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "##5778a3",
      color: "#3b999b",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#5778a3" },
    },
    invalid: {
      iconColor: "#EE5873",
      color: "#EE5873",
    },
  },
};

const PaymentComponent = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="card-title">
          <h2>Payment</h2>
        </div>
        <div className="card-body">
          <div className="payment-type">
            <h4>Choose Payment method below</h4>
            <div className="types flex justify-space-between">
              <div className="type selected">
                <div className="logo">
                  <CreditCard />
                </div>
                <div className="text">
                  <p>Pay with Credit Card</p>
                </div>
              </div>

              <div className="type">
                <div className="logo">
                  <Paypal />
                </div>
                <div className="text">
                  <p>Pay with PayPal</p>
                </div>
              </div>

              <div className="type">
                <div className="logo">
                  <Apple />
                </div>
                <div className="text">
                  <p>Pay with Apple Pay</p>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-info flex justify-space-between">
            <div className="column billing">
              <div className="title">
                <div className="num">1</div>
                <h4>Billing Info</h4>
              </div>
              <div className="field full">
                <label for="name">Full Name</label>
                <input id="name" type="text" placeholder="Full Name"></input>
              </div>
              <div className="field full">
                <label for="address">Billing Address</label>
                <input
                  id="address"
                  type="text"
                  placeholder="Billing Address"
                ></input>
              </div>
              <div className="flex justify-space-between">
                <div className="field half">
                  <label for="city">City</label>
                  <input id="city" type="text" placeholder="City"></input>
                </div>
                <div className="field half">
                  <label for="state">State</label>
                  <input id="state" type="text" placeholder="State"></input>
                </div>
              </div>
              <div className="field full">
                <label for="zip">Zip</label>
                <input id="zip" type="text" placeholder="Zip"></input>
              </div>
            </div>
            <div className="column shipping">
              <div className="title">
                <div className="num">2</div>
                <h4>Credit Card Info</h4>
              </div>
              <div className="field full">
                <label for="name">Cardholder Name</label>
                <input id="name" type="text" placeholder="Full Name"></input>
              </div>
              <div className="field full">
                <CardElement
                  options={CARD_ELEMENT_OPTIONS}
                  className="card-element"
                />
              </div>
              {/* <div className="field full">
                <PaymentElement />
              </div> */}
              {/* <div className="field full">
                <label for="card-number">Card Number</label>

                <CardNumberElement />
              </div>
              <div className="flex justify-space-between">
                <div className="field half">
                  <label for="exp.month">Exp. Month</label>

                  <CardExpiryElement />
                </div>
                <div className="field half">
                  <label for="cvc">CVC Number</label>

                  <CardCvcElement />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="card-actions flex justify-space-between">
          <div className="flex-start">
            <Link to="/">
              <button className="return-store-button button-secondary">
                Return to Store
              </button>
            </Link>
          </div>
          <div className="flex-end">
            <Link to="/cart">
              <button className="return-cart-button return-cart-button-link">
                Back to Cart
              </button>
            </Link>
            <button className="pay-button button-primary">Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
