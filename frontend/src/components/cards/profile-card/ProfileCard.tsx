import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../../context/user/UserContext";

import "./profile-card.scss";
import { CtaBtn } from "../../buttons/cta-btn/CtaBtn";

export const ProfileCard = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="profile-card">
      <div className="flex ai-c jc-sb">
        <h2 className="fs-xl">Profile</h2>
        <CtaBtn color="transparent" small onClick={handleClick}>
          Logout
        </CtaBtn>
      </div>
      <h4 className="fs-l">
        Name: <span className="fs-l">{user?.name}</span>
      </h4>
      <h4 className="fs-l">
        Email: <span className="fs-l">{user?.email}</span>
      </h4>
    </div>
  );
};
