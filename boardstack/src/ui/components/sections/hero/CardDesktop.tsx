"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export const CardDesktop = () => {
  return (
    <div className=" mt-16 relative  ">
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary/50 rounded-2xl w-fit flex items-center justify-center absolute top-0  backdrop-blur-lg "
        initial={{ opacity: 0, scale: 0.5, x: 80, y: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_3.json"
          className="w-46 h-auto"
        />
      </motion.div>
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary rounded-2xl w-fit flex items-center justify-center backdrop-blur-lg absolute top-0"
        initial={{ opacity: 0, scale: 0.5, x: 30, y: 20 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_2.json"
          className="w-46 h-auto"
        />
      </motion.div>
      <motion.div
        className="dark:bg-dark-tertiary/80 backdrop-blur-lg bg-light-tertiary rounded-2xl w-fit flex items-center justify-center absolute "
        initial={{ opacity: 0, scale: 0.5, x: 20, y: 50 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_1.json"
          className="w-50 h-auto stroke-black dark:stroke-white fill-black dark:fill-white"
        />
      </motion.div>
    </div>
  );
};
