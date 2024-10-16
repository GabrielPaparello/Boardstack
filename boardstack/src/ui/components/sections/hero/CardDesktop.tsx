"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { roboto } from "../../common/fonts";

export const CardDesktop = () => {
  return (
    <div className="mt-16 flex justify-center relative">
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary/50 rounded-2xl w-full max-w-[200px] backdrop-blur-lg z-10 dark:shadow-dark-subtle/50 shadow-sm shadow-light-title"
        initial={{ opacity: 0, scale: 0.5, y: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3
          className={`text-center ${roboto} font-semibold dark:text-dark-body text-light-body `}
        >
          Visualizá tus Tareas
        </h3>
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_3.json"
          className="w-18 h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute left-1/2 transform -translate-x-full dark:bg-dark-tertiary/80 bg-light-tertiary rounded-2xl w-full max-w-[200px] backdrop-blur-lg z-0 dark:shadow-dark-subtle/50 shadow-sm shadow-light-title"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -360 }}
        transition={{ duration: 0.8, delay: 4 }}
      >
        <h3
          className={`text-center ${roboto} font-semibold dark:text-dark-body text-light-body `}
        >
          Prioriza y Organizá
        </h3>
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_2.json"
          className="w-18 h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute left-1/2 transform translate-x-full dark:bg-dark-tertiary/80 bg-light-tertiary rounded-2xl w-full max-w-[200px] backdrop-blur-lg z-0 dark:shadow-dark-subtle/50 shadow-sm shadow-light-title"
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={{ opacity: 1, x: 160, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <h3
          className={`text-center ${roboto} font-semibold dark:text-dark-body text-light-body `}
        >
          Colabora y Comparti
        </h3>
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_1.json"
          className="w-18 h-auto stroke-black dark:stroke-white fill-black dark:fill-white"
        />
      </motion.div>
    </div>
  );
};
