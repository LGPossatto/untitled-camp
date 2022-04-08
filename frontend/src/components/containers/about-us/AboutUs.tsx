import placeholderImg from "../../../assets/images/placeholder-3.jpg";

import "./about-us.scss";

export const AboutUs = () => {
  return (
    <section className="about-us flex jc-sb ai-c">
      <div className="about-us__info flex-1">
        <h2 className="fs-l">Test asd</h2>
        <p className="fs-m fc-gray-dark">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quo
          nemo eaque accusamus eveniet laboriosam, quis accusantium dolorem
          deleniti magnam nostrum neque blanditiis! Ad libero tenetur maxime.
          Ipsum, nobis aut.
        </p>
      </div>
      <div className="about-us__img flex-1">
        <img src={placeholderImg} alt="about us" />
      </div>
    </section>
  );
};
