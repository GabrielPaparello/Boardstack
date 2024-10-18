import Link from "next/link";
import React from "react";
import Image from "next/image";
import { roboto, urbanist } from "../../common/fonts";
export const Tutorial = () => (
  <section className="flex flex-col items-center justify-start pt-10 dark:bg-dark-quaternary bg-light-secondary">
    <article className="flex flex-col items-start justify-start text-start">
      <h3
        className={`${urbanist.className} text-3xl font-bold  dark:text-dark-title text-light-title`}
      >
        Como usar un tablero Kanban
      </h3>
      <h4
        className={`${roboto.className}font-semibold text-xl dark:text-dark-subtle text-light-subtle`}
      >
        Aprende a usar un tablero kanban con nuestro Tutorial
      </h4>
    </article>
    <article className={`flex flex-col items-start justify-center`}>
      <Image
        src={""}
        alt={""}
        width={100}
        height={100}
        className="min-w-[600px] bg-white"
      />
      <Link
        href="/"
        className={`${urbanist.className} font-semibold dark:text-dark-accent-primary text-light-accent-primary`}
      >
        Ir al Tutorial
      </Link>
    </article>
  </section>
);
