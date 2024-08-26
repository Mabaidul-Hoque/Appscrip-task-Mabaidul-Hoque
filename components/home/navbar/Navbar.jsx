"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalData } from "@/contexts/GlobalDataProvider";

const navItems = [
  { name: "Shop", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = ({ navBarStyle, navListStyle, navItemStyle, activeLink }) => {
  const pathname = usePathname();
  const { showNavbar, setShowNavbar } = useGlobalData();

  return (
    <nav className={navBarStyle}>
      <ul className={navListStyle}>
        {navItems.map((item) => (
          <li key={item.name} onClick={() => setShowNavbar(!showNavbar)}>
            <Link
              className={
                pathname === item.path
                  ? `${navItemStyle} ${activeLink}`
                  : `${navItemStyle}`
              }
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
