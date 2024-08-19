"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const Themeswitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <div className=" w-fit px-2 py-1 text-white relative">
      <button 
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="text-white px-4 py-2 rounded-md transition-all ease-in-out duration-500"
      >
        {currentTheme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Themeswitch;
