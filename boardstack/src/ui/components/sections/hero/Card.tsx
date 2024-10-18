"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { roboto } from "../../common/fonts";

export const Card = () => {
  return (
    <div className="mt-16 flex flex-col md:flex-row justify-center items-center  gap-10 ">
      <motion.div
        className="bg-white/50 backdrop-blur-md border stroke-black  border-white/20 rounded-lg p-3 md:p-6 max-w-44 md:max-w-72 lg:max-w-[500px] shadow-lg "
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", delay: 1 }}
      >
        <h3
          className={`text-center ${roboto.className} font-semibold dark:text-dark-body text-light-body `}
        >
          Prioriza y Organizá
        </h3>
        <Player
          loop
          autoplay
          speed={1}
          src="/lottie/kanbanAnim.json"
          className="w-18 h-auto "
        />
      </motion.div>

      <motion.div
        className="bg-white/50 backdrop-blur-md border border-white/20 rounded-lg p-3 md:p-6 max-w-44 md:max-w-72 lg:max-w-[500px] shadow-lg "
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween", delay: 1.5 }}
      >
        <h3
          className={`text-center ${roboto.className} font-semibold dark:text-dark-body text-light-body `}
        >
          Colabora y Comparti
        </h3>
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/sharingAnim.json"
          className="w-18 h-auto stroke-black  dark:stroke-white fill-black dark:fill-white"
        />
      </motion.div>
    </div>
  );
};
