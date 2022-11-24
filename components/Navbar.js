import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Image from 'next/image';

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
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="70.000000pt" height="50.000000pt" viewBox="0 0 1080.000000 763.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,763.000000) scale(0.100000,-0.100000)"
              fill="#007bff" stroke="currentColor">
              <path d="M7393 5240 c-132 -28 -234 -119 -276 -244 -23 -66 -22 -206 1 -264
24 -62 88 -135 150 -171 30 -17 106 -52 170 -77 140 -55 178 -77 197 -114 57
-111 -61 -226 -194 -190 -58 15 -117 71 -138 131 -10 27 -22 49 -28 49 -5 0
-60 -15 -122 -33 l-111 -33 19 -53 c27 -78 61 -131 118 -184 79 -74 173 -107
306 -107 275 0 460 178 442 425 -7 88 -32 154 -84 214 -46 53 -108 88 -270
155 -142 57 -189 88 -203 132 -10 28 -9 40 7 71 25 51 61 75 115 75 67 1 117
-28 156 -93 22 -37 38 -53 50 -51 9 2 59 20 110 40 60 24 92 42 92 52 0 24
-44 112 -75 148 -37 44 -99 85 -160 106 -59 20 -212 29 -272 16z"/>
              <path d="M4770 5115 l0 -115 125 0 125 0 0 -515 0 -515 140 0 140 0 0 515 0
515 125 0 125 0 0 115 0 115 -390 0 -390 0 0 -115z"/>
              <path d="M6115 5218 c-28 -86 -41 -128 -65 -213 -16 -55 -61 -206 -100 -335
-39 -129 -101 -332 -136 -450 -35 -118 -67 -223 -70 -233 -5 -16 4 -17 122
-15 l127 3 12 45 c7 25 21 82 31 128 l19 82 180 -2 180 -3 30 -125 31 -125
143 -3 c113 -2 142 0 138 10 -7 19 -262 909 -303 1058 -19 69 -39 140 -45 158
l-11 32 -139 0 c-103 0 -141 -3 -144 -12z m184 -519 c34 -136 61 -249 61 -253
0 -9 -238 -8 -243 2 -3 4 19 109 48 233 55 235 65 273 70 267 2 -2 30 -114 64
-249z"/>
              <path fill="#007bff" d="M8370 4600 l0 -631 138 3 137 3 3 258 2 257 150 0 150 0 0 -260 0
-260 140 0 140 0 0 630 0 630 -140 0 -140 0 0 -255 0 -255 -150 0 -150 0 0
255 0 255 -140 0 -140 0 0 -630z"/>
              <path d="M9740 4600 l0 -630 140 0 140 0 0 630 0 630 -140 0 -140 0 0 -630z" />
              <path d="M1729 5203 c-2 -10 -3 -98 -1 -195 l3 -178 532 -2 532 -3 3 -1172 2
-1173 250 0 250 0 2 1173 3 1172 642 3 642 2 3 178 c2 97 1 185 -1 195 -3 16
-79 17 -1431 17 -1352 0 -1428 -1 -1431 -17z"/>
              <path fill="#007bff" d="M1287 4980 c-25 -28 -72 -94 -105 -148 -316 -513 -393 -1091 -202
-1499 60 -127 124 -218 229 -323 284 -283 745 -466 1371 -545 58 -7 107 -12
109 -10 1 2 3 91 2 197 l0 193 -108 12 c-166 17 -332 50 -463 89 -314 94 -527
208 -704 374 -100 95 -151 160 -205 261 -187 347 -159 788 84 1331 29 65 49
118 45 118 -5 0 -28 -23 -53 -50z"/>
            </g>
          </svg>
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
