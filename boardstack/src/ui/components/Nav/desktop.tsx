import React from "react";
import { urbanist } from "../common/fonts";

export const Desktop = () => {
  return (
    <section className="md:block hidden">
      <nav
        className={`bg-dark-primary dark:bg-light-primary ${urbanist.className}   w-fit p-5  rounded-br-full   rounded-bl-full `}
      >
        <ul
          className={`flex items-start justify-start text-light-primary dark:text-dark-primary px-28 gap-5 font-bold `}
        >
          <li>HOME</li>
          <li>LEARN</li>
          <li>ABOUT</li>
        </ul>
      </nav>
    </section>
  );
};
