import React from "react";
import Image from "next/image";
import { blogData } from "@/lib/data/blog.data";
import Link from "next/link";
import { roboto, urbanist } from "../../common/fonts";
export const Blog = () => {
  return (
    <main>
      <section className="flex flex-col items-center justify-center dark:bg-dark-primary bg-light-primary py-10 gap-10">
        <h3
          className={`${urbanist.className} font-bold text-xl md:text-4xl dark:text-dark-title text-light-title lg:max-w-[600px] text-start md:text-center`}
        >
          Profundiza en el mundo de la gestion de proyectos y productividad
        </h3>
        <article className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <Image
            src={`${blogData.featured?.image}`}
            width={200}
            height={200}
            alt={`a place holder image`}
            className="shadow-2xl dark:shadow-black shadow-white lg:min-w-[300px]"
          />
          <p
            className={`${roboto.className} dark:text-dark-body text-base lg:text-lg lg:max-w-72 md:max-w-52 text-center text-light-body`}
          >
            {blogData.featured?.subtitle}
          </p>
        </article>
        <Link
          className={`${urbanist.className} bg-light-accent-primary text-center dark:bg-dark-accent-tertiary px-3 py-2 rounded-xl text-light-title dark:text-dark-title font-bold`}
          href={`/blog/${blogData.featured?.id}`}
        >
          Visita el post
        </Link>
        <section className="flex flex-col mt-5">
          <h3
            className={`${urbanist.className}dark:text-dark-accent-primary text-light-accent-tertiary text-lg lg:text-3xl py-2 my-2`}
          >
            Temas destacados
          </h3>
          <article className="flex flex-col lg:flex-row items-center justify-center gap-10 ">
            {blogData.posts?.map((post) => (
              <article
                key={`post-${post.id}`}
                className="flex flex-col items-center justify-center gap-5"
              >
                <Image
                  src={`${post.image}`}
                  width={200}
                  height={200}
                  alt={`a place holder image`}
                  className="shadow-2xl dark:shadow-black shadow-white lg:min-w-[300px]"
                />
                <h4
                  className={`${urbanist.className} dark:text-dark-accent-quaternary text-light-accent-primary text-center`}
                >
                  {post.title}
                </h4>
                <p
                  className={`text-center dark:text-dark-title text-light-subtle ${roboto.className} text-wrap md:max-w-52 max-h-[100px] min-h-[100px] text-base `}
                >
                  {post.subtitle}
                </p>
                <Link
                  className={`${urbanist.className} bg-light-accent-primary
                   text-center dark:bg-dark-accent-tertiary px-3 py-2 rounded-xl text-light-title dark:text-dark-title font-bold`}
                  href={`/blog/${post.id} `}
                >
                  Visita el post
                </Link>
              </article>
            ))}
          </article>
        </section>
      </section>
    </main>
  );
};
