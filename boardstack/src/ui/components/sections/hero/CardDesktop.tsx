"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export const CardDesktop = () => {
  return (
    <div className="mt-16 relative flex justify-center">
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary/50 rounded-2xl w-fit flex items-center justify-center backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.5 }} // Solo escalado inicial
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_3.json"
          className="w-18 h-auto max-w-[200px]"
        />
      </motion.div>
      
      <motion.div
        className="dark:bg-dark-tertiary/80 bg-light-tertiary rounded-2xl w-fit flex items-center justify-center backdrop-blur-lg absolute left-1/4" // Posición a la izquierda
        initial={{ opacity: 0, scale: 0.5, x: -30 }} // Escalado inicial
        animate={{ opacity: 1, scale: 1, x: 0 }} // Se desplaza al centro
        transition={{ duration: 0.8, delay: 0.8 }} // Se espera un momento para escalar
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_2.json"
          className="w-18 h-auto max-w-[200px]"
        />
      </motion.div>
      
      <motion.div
        className="dark:bg-dark-tertiary/80 backdrop-blur-lg bg-light-tertiary rounded-2xl w-fit flex items-center justify-center absolute right-1/4" // Posición a la derecha
        initial={{ opacity: 0, scale: 0.5, x: 30 }} // Escalado inicial
        animate={{ opacity: 1, scale: 1, x: 0 }} // Se desplaza al centro
        transition={{ duration: 0.8, delay: 0.8 }} // Se espera un momento para escalar
      >
        <Player
          loop
          autoplay
          speed={0.5}
          src="/lottie/animation_1.json"
          className="w-18 h-auto stroke-black dark:stroke-white fill-black dark:fill-white max-w-[200px]"
        />
      </motion.div>
    </div>
  );
};
