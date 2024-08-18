import Link from "next/link";
import React from "react";
import Aside from "../Aside/Aside";

interface NavsidebarProps {
  closeSidebar: () => void;
}

const Navsidebar: React.FC<NavsidebarProps> = ({ closeSidebar }) => {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <nav className="flex flex-col items-center text-2xl gap-6 justify-center pt-16">
        <Link
          href="/Blog/ligikuu"
          className="hover:text-text"
          onClick={closeSidebar}
        >
          ligikuu
        </Link>
        <Link
          href="/Blog/kimataifa"
          className="hover:text-text"
          onClick={closeSidebar}
        >
          kimataifa
        </Link>
        <Link
          href="/Blog/Bongofleva"
          className="hover:text-text"
          onClick={closeSidebar}
        >
          Bongofleva
        </Link>
        <Link
          href="/Blog/Burudani"
          className="hover:text-text"
          onClick={closeSidebar}
        >
          Burudani
        </Link>
        <Link
          href="/Blog/Jamii"
          className="hover:text-text"
          onClick={closeSidebar}
        >
          Jamii
        </Link>
      </nav>
      <div className="w-full pt-16">
        <Aside />
      </div>
    </div>
  );
};

export default Navsidebar;
