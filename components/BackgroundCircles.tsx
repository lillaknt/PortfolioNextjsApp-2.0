import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      {/* Wave-like Circle */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.05, 0.5],
        }}
        transition={{
          duration: 3.8,
        }}
        className="absolute border border-brownPrimary/10 rounded-full h-[490px] w-[490px] mt-52 animate-pulse opacity-0.5"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.05, 0.5],
        }}
        transition={{
          duration: 3.8,
        }}
        className="absolute border border-brownPrimary/5 rounded-full h-[560px] w-[560px] mt-52 animate-pulse opacity-0.5"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.05, 0.5],
        }}
        transition={{
          duration: 3.8,
          repeat: 1,
          repeatType: "reverse",
        }}
        className="absolute border border-brownPrimary/5 rounded-full h-[780px] w-[780px] mt-52 animate-pulse opacity-0.5"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.05, 0.5],
        }}
        transition={{
          duration: 3.8,
          repeat: 1,
          repeatType: "reverse",
        }}
        className="absolute border border-brownPrimary/20 rounded-full h-[810px] w-[810px] mt-52 animate-pulse opacity-0.5"
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.1, 0.4, 0.4],
        }}
        transition={{
          duration: 3.8,
          repeat: 1,
          repeatType: "reverse",
        }}
        className="absolute border border-brownPrimary/50 rounded-full h-[955px] w-[955px] mt-52 animate-pulse opacity-0.5"
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.1, 0.4, 0.4],
        }}
        transition={{
          duration: 3.8,
          repeat: 1,
          repeatType: "reverse",
        }}
        className="absolute border border-brownPrimary/10 rounded-full h-[960px] w-[960px] mt-52 animate-pulse opacity-0.5"
      />
      <div className="absolute border border-brownPrimary/5 rounded-full h-[660px] w-[660px] mt-52 animate-pulse opacity-0.5" />

      <div className="absolute border border-brownPrimary/5 rounded-full h-[900px] w-[900px] mt-52 animate-pulse opacity-0.5" />
    </div>
  );
}
