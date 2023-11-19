import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="sectionDiv overflow-hidden text-left md:flex-row max-w-full"
    >
      <h3 className="sectionTitle">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-offGray scrollbar-thumb-brownPrimary/20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -10,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src="/images/komorebi.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-turqAccent/50">
                  Case Study {i + 1}
                </span>{" "}
              </h4>
              <p className="text-lg text-center md:text-left">
                As a personal project, I founded and managed an e-commerce
                company, specializing in the kitchen knife niche, conducting
                market research and utilizing Shopify for the online store. I
                wore multiple hats, handling every aspect of the business - from
                accounting and marketing to customer service, branding, order
                fulfillment, website design, and more. Through this experience,
                I enhanced my sense of responsibility, creativity, and time
                management skills. Currently, I have put the company on hold to
                focus on my business engineering degree and explore new ideas
                related to the project.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-brownPrimary/5 left-0 h-[600px] -skew-y-12"></div>
    </motion.div>
  );
}
