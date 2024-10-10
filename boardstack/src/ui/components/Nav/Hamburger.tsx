"use client";
import { props } from "@/ui/types/nav/hamburger.types";
import React from "react";

export const Hamburger = ({ isOpen, setIsOpen }: props) => {
  const genericHamburgerLine = `h-1  w-6 my-1 rounded-full bg-black dark:bg-light-primary transition ease transform duration-300`;

  return (
    <div className="md:hidden">
      <button
        className="flex flex-col h-12 w-12  rounded justify-center items-center group "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
};
