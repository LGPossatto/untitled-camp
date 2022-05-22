import { useNavigate } from "react-router-dom";

import heroImg from "../../../assets/images/hero-1.jpg";

import "./hero.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";
import { Tag } from "../../visual-elements/tag/Tag";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <header className="hero">
      <div className="hero__img">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="hero__text container">
        <Tag text="A New Horizon" fontColor="fc-gray" fontSize="fs-r-sm"></Tag>
        <h1 className="fs-r-l fc-reverse">Explore Nature</h1>
        <p className="fs-r-m fc-reverse">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          eligendi porro, quo neque, ullam odio nisi enim temporibus debitis
          mollitia laboriosam! Dignissimos distinctio saepe natus facilis!
          Molestias magni praesentium soluta?
        </p>
        <CtaBtn
          onClick={() => {
            navigate("/shop/1");
          }}
          responsive
        >
          Start Shopping
        </CtaBtn>
      </div>
    </header>
  );
};
