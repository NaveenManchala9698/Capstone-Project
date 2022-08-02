import { Button } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

/* const mapStateToProps = (state) => {
  return {
    cartLength: state.cart.length,
  };
}; */

const CartIndicator = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/cart")}>
      <Cart4 />
      <div>Cart ({/* {cartLength} */}0)</div>
    </div>
  );
};

/* export default connect(mapStateToProps)(CartIndicator); */
export default CartIndicator;
