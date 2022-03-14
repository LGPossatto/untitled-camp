import heroImg from "../../../assets/images/hero-1.jpg";

import "./hero.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import { Tag } from "../../visual-elements/tag/Tag";

export const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__img">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="hero__text container">
        <Tag text="askd lask djs" fontColor="fc-gray" fontSize="fs-r-sm"></Tag>
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
