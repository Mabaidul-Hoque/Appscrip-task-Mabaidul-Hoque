import Image from "next/image";
import React from "react";
import "./header.css";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* Header Upper Part */}
      <div className="header_upper_container">
        {/* ICON */}
        <TbCategory2 className="icon_height" />
        <p>Lorem ipsum dolor</p>
      </div>

      {/* Header Lower Part */}
      <div className="header_lower_container">
        <div className="header_lower_container_left">
          <FaBars className="icon_height" />
          <Image width={20} height={20} src="/logo.png" alt="logo" />
        </div>
        <p>LOGO</p>
        <div className="header_lower_container_right">
          <CiSearch className="icon_height" />
          <CiHeart className="icon_height" />
          <IoBagCheckOutline className="icon_height" />
        </div>
      </div>
    </header>
  );
};

export default Header;
