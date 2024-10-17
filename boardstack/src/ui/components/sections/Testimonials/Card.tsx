import { roboto, urbanist } from "../../common/fonts";
import StarIcon from "./StarIcon";
import QuotesIcon from "./Quotes";
import { data } from "@/ui/types/testimonials.types";

const totalStars = new Array(5).fill(null);

export const Card = ({ data }: { data: data }) => {
  return (
    <>
      <section
        className={`dark:bg-dark-quaternary  relative bg-light-secondary flex flex-col gap-5  p-5 max-w-[300px] text-nowrap rounded-[33px] shadow-md shadow-black `}
      >
        <article className="flex justify-around items-center ">
          <section className="flex flex-col">
            <h3
              className={`${urbanist.className} font-semibold dark:text-dark-title text-light-title lg:text-xl`}
            >
              {data.userName}
            </h3>
            <h3
              className={`${roboto.className} dark:text-dark-subtle text-light-subtle font-light lg:text-base`}
            >
              {data.role}
            </h3>
          </section>
          <article className="flex gap-1 xs:mx-3">
            {totalStars.map((_, index) => (
              <StarIcon
                key={`star-${index + 1}`}
                className={`${
                  data.rating <= index
                    ? "fill-dark-subtle/80"
                    : "fill-dark-accent-quaternary"
                }`}
              />
            ))}
          </article>
        </article>
        <article>
          <QuotesIcon className="dark:fill-dark-accent-tertiary fill-light-accent-primary" />
          <p
            className={`${roboto.className} text-wrap dark:text-dark-body text-light-body`}
          >
            {data.review}
          </p>
          <QuotesIcon className="dark:fill-dark-accent-tertiary fill-light-accent-primary self-end place-self-end" />
        </article>
      </section>
    </>
  );
};
