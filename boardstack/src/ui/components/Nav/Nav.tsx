"use client";
import ThemeSwitch from "@/ui/components/themeProviders/ThemeSwitch";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import { Mobile } from "./mobile";
import { Desktop } from "./desktop";
import { urbanist } from "../common/fonts";
import { useUser } from "@auth0/nextjs-auth0/client";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  return (
    <main className="relative md:flex md:items-center md:justify-center z-10">
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Desktop />
      <section
        className={`fixed top-2 md:top-5 ${urbanist.className} font-bold px-5 right-0  items-center justify-center flex gap-5 `}
      >
        <ThemeSwitch />
        {user === undefined && (
          <a
            className="text-light-accent-primary dark:text-dark-accent-primary"
            href="/api/auth/login"
          >
            LOG IN
          </a>
        )}
        {user && (
          <a
            className="text-light-accent-primary dark:text-dark-accent-primary"
            href="/api/auth/logout"
          >
            LOG OUT
          </a>
        )}
      </section>
    </main>
  );
};
