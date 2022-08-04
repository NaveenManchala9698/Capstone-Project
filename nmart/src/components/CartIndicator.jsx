import { Button } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";

/* const mapStateToProps = (state) => {
  return {
    cartLength: state.cart.content.length,
  };
}; */

const CartIndicator = () => {
  const cartLength = useSelector((state) => state.cartReducer.content.length);

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/cart")}>
      <Cart4 />
      <div>Cart ({cartLength})</div>
    </div>
  );
};

/* export default connect(mapStateToProps)(CartIndicator); */
export default CartIndicator;
