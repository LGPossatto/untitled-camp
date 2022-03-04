import heroImg from "../../../assets/images/hero-1.jpg";

import "./hero.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__img">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="hero__text container">
        <span className="hero__tag fs-r-sm fc-gray">askd lask djs</span>
        <h1 className="fs-r-l fc-reverse">asdlk adsasdasd</h1>
        <p className="fs-r-m fc-reverse">
          asdasdasd asd asd asd ad dd asdasdasdas a dasd asdasd as dasda a
          dasdas asd asd as dasd ad sd sa asdasd sad asd as das das dasd asd ad
          as sdadasdasd asd
        </p>
        <CtaBtn onClick={() => console.log("ok header")} responsive>
          asd asdas
        </CtaBtn>
      </div>
    </header>
  );
};
