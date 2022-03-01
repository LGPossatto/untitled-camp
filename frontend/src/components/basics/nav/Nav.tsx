import "./nav.scss";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="container flex jc-sb ai-c">
        <a href="/" className="flex-1 fs-l fw-bold fc-reverse">
          untitled-camp
        </a>
        <ul className="flex-1 flex jc-sb ai-c">
          <li className="fs-m fc-reverse">TEST</li>
          <li className="fs-m fc-reverse">TEST</li>
          <li className="fs-m fc-reverse">TEST</li>
          <li className="fs-m fc-reverse">TEST</li>
        </ul>
        <div className="nav__cart flex-1 fs-m fc-reverse">Cart</div>
        <span className="nav__border"></span>
      </div>
    </nav>
  );
};
