"use client";
import ThemeSwitch from "@/ui/components/themeProviders/ThemeSwitch";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import { Mobile } from "./mobile";
import { Desktop } from "./desktop";
import { urbanist } from "../common/fonts";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative md:flex md:items-center md:justify-center z-10">
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Desktop />
      <section
        className={`fixed top-2 md:top-5 ${urbanist.className} font-bold px-5 right-0  items-center justify-center flex gap-5 `}
      >
        <ThemeSwitch />
        <h2 className="text-light-accent-primary dark:text-dark-accent-primary">
          LOG IN
        </h2>
      </section>
    </main>
  );
};
