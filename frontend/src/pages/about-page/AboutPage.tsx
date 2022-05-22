import "./about-page.scss";

export const AboutPage = () => {
  return (
    <div className="about-page container">
      <h1 className="fs-l">About This Site</h1>
      <p className="fs-m fc-gray-dark">
        Untitled-camp is a web e-commerce about nature, off-road, and motocross.
        Here you can create an account, look for items, and add or remove items
        from your personal cart.
        <br />
        <br />
        The site is an exercise to push my skills with web development further.
        <br />
        <br />
        This site is part of my portfolio. You can check more about me here:{" "}
        <a
          className="fs-m fc-accent fw-bold"
          href="https://luizgustavo.netlify.app/"
          target="_blank"
        >
          more
        </a>
        .<br />
        <br />
      </p>
    </div>
  );
};
