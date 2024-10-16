import React from "react";
import { urbanist } from "../../common/fonts";
import { CardMobile } from "./Card";
import Link from "next/link";
import { CardDesktop } from "./CardDesktop";

export const Hero = () => {
  return (
    <section className="absolute top-[15%] left-1/2 -translate-x-1/2 z-5 flex flex-col items-center justify-center dark:bg-dark-primary bg-light-primary">
      <article className="flex flex-col items-center justify-center gap-3 md:mt-10">
        <h1 className={`font-bold text-lg md:text-3xl ${urbanist} text-nowrap`}>
          <span
            className={`dark:text-dark-accent-secondary text-light-accent-secondary text-xl md:text-4xl`}
          >
            Resolvé
          </span>{" "}
          la Sobrecarga de tareas
        </h1>
        <h2
          className={`${urbanist} text-light-body dark:text-dark-body text-sm md:text-lg font-semibold`}
        >
          Organiza tus Ideas y Proyectos de Manera Visual y Efectiva con{" "}
          <span
            className={`dark:text-dark-accent-tertiary text-light-accent-primary font-semibold`}
          >
            Kanban
          </span>
        </h2>
      </article>
      <article className="">
        <section className="xs:hidden md:block">
          <CardDesktop />
        </section>
        <section className="md:hidden xs:block ">
          <CardMobile />
        </section>
      </article>
      <article className={`${urbanist}`}>
        <ul className="flex flex-col gap-3 mt-5 items-center justify-center">
          <li>
            <Link
              href={""}
              className={` dark:text-dark-body text-light-sub_body`}
            >
              Aprender mas
            </Link>
          </li>
          <li>
            <Link href={""} className="text-light-accent-tertiary">
              Empezá a organizarte Hoy
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
};
