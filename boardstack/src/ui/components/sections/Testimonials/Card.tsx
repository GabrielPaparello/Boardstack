import Image from "next/image";
import { urbanist } from "../../common/fonts";

export const Card = () => {
  return (
    <>
      <section className="dark:bg-dark-quaternary bg-light-secondary">
        <article className="flex justify-around items-center ">
          <h3
            className={`${urbanist} font-semibold dark:text-dark-title text-light-title`}
          >
            John Doe
          </h3>
          <Image
            src="/testimonials/star.svg"
            width={25}
            height={25}
            alt="valoration star icon"
          />
        </article>
        <h3>Product Manager</h3>
        <article>
          <Image
            src={"/testimonials/quotations.svg"}
            alt={"quotations mark icon"}
            width={50}
            height={50}
          />
          <p>
            Desde que empezamos a usar esta aplicación nuestro equipo ha logrado
            reducir el tiempo de entrega en un 30%. La visualización clara de
            las tareas nos ha permitido enfocarnos en lo que realmente importa.
          </p>
          <Image
            src={"/testimonials/quotations.svg"}
            alt={"quotations mark icon"}
            width={50}
            height={50}
          />
        </article>
      </section>
    </>
  );
};
