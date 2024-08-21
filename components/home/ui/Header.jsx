import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* ICON */}
      {/* <div> */}
      <FontAwesomeIcon style={{ fontSize: 10, height: 15 }} icon={faQrcode} />
      {/* </div> */}
      <p>Lorem ipsum dolor</p>
    </div>
  );
};

export default Header;
