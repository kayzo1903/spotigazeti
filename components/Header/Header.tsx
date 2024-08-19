"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaList } from "react-icons/fa6";
import Navsidebar from "./Navsidebar";
import Themeswitch from "../Theme/Themeswitch";

const Header = () => {
  const [openNavbar, setNavbarOpen] = useState(false);

  const closeSidebar = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="max-w-screen-xl text-white bg-skin2 mx-auto h-16 sticky top-0 z-50">
      <div className="w-full flex p-5 justify-between items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white"
        >
          <span className="text-xl">spotigazeti</span>
        </Link>
        <Themeswitch />
        <nav className="hidden md:flex flex-wrap items-center text-base justify-center">
          <Link href="/Blog/ligikuu" className="mr-5 hover:text-text">
            ligikuu
          </Link>
          <Link href="/Blog/kimataifa" className="mr-5 hover:text-text">
            kimataifa
          </Link>
          <Link href="/Blog/Bongofleva" className="mr-5 hover:text-text">
            Bongofleva
          </Link>
          <Link href="/Blog/Burudani" className="mr-5 hover:text-text">
            Burudani
          </Link>
          <Link href="/Blog/Jamii" className="mr-5 hover:text-text">
            Jamii
          </Link>
        </nav>
        <button
          onClick={() => setNavbarOpen(!openNavbar)}
          className="text-xl block md:hidden"
        >
          <FaList />
        </button>
      </div>
      <div
        className={`fixed md:hidden transition-all duration-500 z-50 top-16 ${
          openNavbar ? "left-0" : "-left-[100%]"
        } w-full h-screen bg-skin2 overflow-y-auto`}
      >
        <Navsidebar closeSidebar={closeSidebar} />
      </div>
    </header>
  );
};

export default Header;
