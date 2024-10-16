"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export const CardMobile = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 gap-8">
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary/50 rounded-2xl w-fit flex items-center justify-center "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_3.json"
          className="w-50 h-auto"
        />
      </motion.div>
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary rounded-2xl w-fit flex items-center justify-center "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_2.json"
          className="w-50 h-auto"
        />
      </motion.div>
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary rounded-2xl w-fit flex items-center justify-center "
        initial={{ opacity: 0, scale: 0.5 }}
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
