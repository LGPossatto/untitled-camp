import { useNavigate } from "react-router-dom";

import "./thankyou.scss";
import { CtaBtn } from "../../components/buttons/cta-btn/CtaBtn";

const Thankyou = () => {
  const navigate = useNavigate();

  return (
    <div className="thankyou">
      <h2 className="fs-l">Thank You!</h2>
      <CtaBtn
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </CtaBtn>
    </div>
  );
};
export default Thankyou;
