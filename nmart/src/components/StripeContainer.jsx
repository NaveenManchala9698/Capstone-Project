import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51LXizhFDvJv48evciUDSjkKHBj1KS37sANJG8EcHLeWs0B5b4j29Y7CVELzSAAw389VlpZAjpo29brPxEXtewiVM000rGr2DZa";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
