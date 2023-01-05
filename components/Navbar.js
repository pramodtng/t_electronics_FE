import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";

const MENU_LIST = [
  { text: "About Us", href: "/about" },
  { text: "Samsung Phones/Tablets", href: "/phones" },
  { text: "News/Announcement", href: "/news" },
  { text: "Authorized Retailers", href: "/retailers" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact Us", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href="/">
          <Image 
            src= "/tashi-logo.png" 
            alt = "logo"
            height={30}
            width = {120}
          />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
