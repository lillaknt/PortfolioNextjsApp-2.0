import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
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
      className=" sectionDiv md:text-left md:flex-row max-w-7xl "
    >
      <h3 className="sectionTitle">About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://media.licdn.com/dms/image/D4D03AQHchwRaCqvNrQ/profile-displayphoto-shrink_400_400/0/1642582062635?e=1703721600&v=beta&t=-UnfVqEvlqVzVJzjc9mlEo3iNLydIYoZLhnrjFb9q3Y"
        className="-mb-20  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-sx font-semibold">
          Here is a{" "}
          <span className=" underline decoration-turqAccent">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Studying software and business engineering - my driving force is using
          technology to improve people&apos;s lives. Stack: C#, Java,
          JavaScript, React, MS SQL, PostgreSQL, PowerBI, CSS, HTML I thrive in
          dynamic environments, love problem-solving, and find purpose in
          collaboration. My superpowers? Curiosity fuels my passion for
          continuous learning and challenging the status quo. Empathy connects
          me with others on a deeper level, understanding their needs and
          perspectives. Beyond coding, I enjoy spending time in nature, solving
          sudoku, experimenting with recipes, and understanding the human brain
          through podcasts. I value teamwork and its positive energy. My ideal
          workspace is where I am welcomed to ask questions and get constructive
          feedback from colleagues with real-life experience. I cherish great
          cooperation, knowledge sharing, and healthy sparring, where we can
          challenge each other&apos;s ideas.
        </p>
      </div>
    </motion.div>
  );
}
