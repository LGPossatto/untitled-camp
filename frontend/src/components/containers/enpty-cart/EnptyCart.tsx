import { useNavigate } from "react-router-dom";

import "./enpty-cart.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

const EnptyCart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop/1");
  };

  return (
    <div className="enpty-cart">
      <h2 className="fs-l">Your cart is enpty!</h2>
      <CtaBtn onClick={handleClick} color="transparent" small>
        Go Back to Shopping
      </CtaBtn>
    </div>
  );
};
export default EnptyCart;
