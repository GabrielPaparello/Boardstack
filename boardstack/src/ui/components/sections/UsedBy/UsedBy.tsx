import React from "react";
import { urbanist } from "../../common/fonts";
import Image from "next/image";
export const UsedBy = () => {
  return (
    <section className="mt-10 flex flex-col items-center justify-center dark:bg-dark-secondary bg-light-secondary py-5">
      <article>
        <h3
          className={`text-center ${urbanist} font-bold dark:text-dark-title text-light-title md:text-xl lg:text-2xl`}
        >
          Industrias que utilizan Kanban
        </h3>
      </article>

      <article className="flex flex-wrap justify-center gap-10 mt-5 lg:gap-20">
        <Image
          src="/amazon-icon.svg"
          alt="Amazon logo"
          width={50}
          height={200}
          title="Amazon Logo"
          className="fill-light-accent-secondary dark:fill-dark-accent-secondary stroke-light-accent-secondary dark:stroke-dark-accent-secondary lg:min-w-[100px] md:min-w-[80px]"
        />
        <Image
          src="/airbnb-icon.svg"
          width={50}
          height={200}
          alt="airbnb logo"
          className="fill-light-accent-secondary dark:fill-dark-accent-secondary stroke-light-accent-secondary dark:stroke-dark-accent-secondary md:min-w-[80px] lg:min-w-[100px]"
        />
        <Image
          src="/instagram-icon.svg"
          width={50}
          height={200}
          alt="instagram logo"
          className="fill-light-accent-secondary dark:fill-dark-accent-secondary stroke-light-accent-secondary dark:stroke-dark-accent-secondary md:min-w-[100px] lg:min-w-[140px]"
        />

        <Image
          src="/spotify-icon.svg"
          width={50}
          height={200}
          alt="spotify logo"
          className="fill-light-accent-secondary dark:fill-dark-accent-secondary stroke-light-accent-secondary dark:stroke-dark-accent-secondary md:min-w-[100px] lg:min-w-[140px]"
        />
      </article>
    </section>
  );
};
