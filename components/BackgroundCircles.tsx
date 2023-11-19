import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          //borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute border border-almostWhite rounded-full h-[800px] w-[800px] mt-52 animate-pulse opacity-10"
      />
      <div className="absolute border border-brownPrimary/25 rounded-full h-[500px] w-[500px] mt-52 animate-pulse opcaity-5" />
      {/* 
            
      
            <div className="absolute border border-brownPrimary rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      
            <div className="absolute border border-white rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-20" />
            <div className="absolute border border-white rounded-full h-[800px] w-[800px] mt-52 animate-pulse opacity-20" /> */}
    </div>
  );
}
