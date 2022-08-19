import { Cart4 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

export default CartIndicator;
