import { motion } from "framer-motion";
import { urbanist } from "../common/fonts";
import { props } from "@/ui/types/nav/hamburger.types";
import { data } from "./nav.data";
import Link from "next/link";
export const Mobile = ({ isOpen }: props) => {
  return (
    <section className="md:hidden fixed ">
      <motion.div
        animate={{
          x: !isOpen ? -120 : 0,
          y: 50,
        }}
      >
        <nav
          className={`bg-dark-primary dark:bg-light-primary ${urbanist.className}   w-fit p-5  rounded-tr-[50px]`}
        >
          <ul
            className={`flex flex-col md:flex-row text-light-primary dark:text-dark-primary pt-5 gap-5 font-bold `}
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
      </motion.div>
    </section>
  );
};
