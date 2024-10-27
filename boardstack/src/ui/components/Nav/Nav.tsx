"use client";
import ThemeSwitch from "@/ui/components/themeProviders/ThemeSwitch";
import { Hamburger } from "./Hamburger";
import { useEffect, useState } from "react";
import { Mobile } from "./mobile";
import { Desktop } from "./desktop";
import { urbanist } from "../common/fonts";
import Link from "next/link";
import { db } from "@/lib/db/orm/db";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [datos, setDatos] = useState({});

  const usuarios = async () => {
    let data = await fetch("/api/select");
    setDatos(await data.json());
  };

  useEffect(() => {
    usuarios();
  }, []);
  return (
    <main className="relative md:flex md:items-center md:justify-center z-10">
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <Desktop />
      <section
        className={`fixed top-2 md:top-5 ${urbanist.className} font-bold px-5 right-0  items-center justify-center flex gap-5 `}
      >
        <ThemeSwitch />

        <Link
          className="text-light-accent-primary dark:text-dark-accent-primary"
          href="/api/auth/login"
        >
          LOG IN
        </Link>
        <Link
          className="text-light-accent-primary dark:text-dark-accent-primary"
          href="/api/auth/logout"
        >
          LOG OUT
        </Link>
      </section>
      <p>
        <span className="text-light-accent-primary dark:text-dark-accent-primary">
          {JSON.stringify(datos)}
        </span>
      </p>
    </main>
  );
};
