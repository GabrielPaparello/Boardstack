import React from "react";
import { urbanist } from "../common/fonts";
import { data } from "./nav.data";
import Link from "next/link";

export const Desktop = () => {
  return (
    <section className="md:block hidden">
      <nav
        className={`bg-dark-primary dark:bg-light-primary ${urbanist.className}   w-fit p-5  rounded-br-full   rounded-bl-full `}
      >
        <ul
          className={`flex items-start justify-start text-light-primary dark:text-dark-primary px-28 gap-5 font-bold `}
        >
          {data.map((data) => (
            <li
              className={`hover:text-light-accent-tertiary dark:hover:text-dark-accent-tertiary`}
              key={`${data.name}+${Math.random()}`}
            >
              <Link href={`${data.link}`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
