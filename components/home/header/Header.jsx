"use client";
import React, { useState } from "react";
import "./header.css";
import "../navbar/navbar.css";
import { CiHeart, CiSearch, CiMenuBurger, CiUser } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import HeaderTopMsg from "./HeaderTopMsg";
import { underDevNotify } from "@/components/utility/underDevNotify";
import { SlArrowDown } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { Navbar } from "..";
import { useGlobalData } from "@/contexts/GlobalDataProvider";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const router = useRouter();
  const { showNavbar, setShowNavbar } = useGlobalData();

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
            onClick={() => setShowNavbar(!showNavbar)}
          />
          {/* NavBar design for mobile */}
          {showNavbar && (
            <div className="nav_bar_mobile">
              <Navbar
                navBarStyle={"navbar_mobile"}
                navListStyle={"nav_list_mobile"}
                navItemStyle="nav_item_mobile"
                activeLink="active_mobile"
              />
              <button
                className="close_btn"
                onClick={() => setShowNavbar(false)}
              >
                <IoMdClose size={30} color="red" />
              </button>
            </div>
          )}
          <img
            width={25}
            height={25}
            src="/Logo.png"
            alt="Logo"
            className="logo"
            onClick={() => router.push("/")}
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
