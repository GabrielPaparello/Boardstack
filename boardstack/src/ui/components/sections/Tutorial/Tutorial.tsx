"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { roboto, urbanist } from "../../common/fonts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleClick = () => {
  toast("Tutorial temporalmente deshabilitado!", {
    className:
      "dark:text-dark-body bg-light-secondary dark:bg-dark-quaternary text-light-body",
  });
};

export const Tutorial = () => (
  <section className="flex flex-col items-center px-2 justify-start pt-10 gap-10 dark:bg-dark-quaternary bg-light-secondary">
    <article className="flex flex-col items-start  justify-start text-start">
      <h3
        className={`${urbanist.className} text-xl md:text-4xl font-bold  dark:text-dark-title text-light-title`}
      >
        Como usar un tablero Kanban
      </h3>
      <h4
        className={`${roboto.className}font-semibold text-sm sm:text-base md:text-lg dark:text-dark-subtle text-light-subtle`}
      >
        Aprende a usar un tablero kanban con nuestro Tutorial
      </h4>
    </article>
    <article className={`flex flex-col items-start justify-center gap-5`}>
      <Image
        src={"/placeholder.png"}
        alt={"a placeholder img"}
        width={100}
        height={100}
        className="xs:min-w-[300px] lg:min-w-[600px] bg-white"
      />
      <Link
        href="/"
        onClick={handleClick}
        className={`${urbanist.className} font-semibold pl-2 dark:text-dark-accent-primary text-light-accent-primary`}
      >
        Ir al Tutorial
      </Link>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </article>
  </section>
);
