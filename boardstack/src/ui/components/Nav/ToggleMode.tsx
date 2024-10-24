import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import React from "react";

export const Toggle = () => {
  return (
    <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, type: "tween", delay: 1 }}
  >
    <Player
      loop
      autoplay
      speed={1}
      src="/lottie/kanbanAnim.json"
      className="w-18 h-auto "
    />
    </motion.div>
  );
};
