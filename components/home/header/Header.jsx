"use client";
import Image from "next/image";
import React from "react";
import "./header.css";
import { CiHeart, CiSearch, CiMenuBurger, CiUser } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import HeaderTopMsg from "./HeaderTopMsg";
import { underDevNotify } from "@/components/utility/underDevNotify";
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
  return (
    <header className="header">
      {/* Header Upper Part */}
      {/* Mobile only */}
      <div className="header_upper_container_mobile">
        <HeaderTopMsg />
      </div>
      <div className="header_upper_container">
        <HeaderTopMsg />
        <HeaderTopMsg />
        <HeaderTopMsg />
      </div>

      {/* Header Lower Part */}
      <div className="header_lower_container">
        <div className="header_lower_container_left">
          <CiMenuBurger
            cursor={"pointer"}
            size={30}
            className="menu"
            onClick={underDevNotify()}
          />
          <Image
            width={25}
            height={25}
            src="/logo.png"
            alt="logo"
            className="logo"
          />
        </div>

        <h2 className="logo_text">LOGO</h2>

        <div className="header_lower_container_right">
          <CiSearch size={30} cursor={"pointer"} onClick={underDevNotify()} />
          <CiHeart size={30} cursor={"pointer"} onClick={underDevNotify()} />
          <IoBagCheckOutline
            size={30}
            cursor={"pointer"}
            onClick={underDevNotify()}
          />
          <CiUser size={30} className="profile" onClick={underDevNotify()} />
          <div className="lang_change" onClick={underDevNotify()}>
            <p>Eng</p>
            <SlArrowDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
