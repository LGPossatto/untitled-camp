import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./burg-btn.scss";
import { BurgMenu } from "../../containers/burg-menu/BurgMenu";

interface props {
  classes?: string;
}

export const BurgBtn = ({ classes }: props) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`burg-btn ${classes ? classes : ""}`}>
      <button className="fs-l fc-reverse" onClick={() => setActive(!active)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <BurgMenu active={active}></BurgMenu>
    </div>
  );
};
