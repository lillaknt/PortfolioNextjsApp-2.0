import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-offGray p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover ob"
        src="https://media.licdn.com/dms/image/C560BAQFRplGjKRKGsg/company-logo_200_200/0/1541598990239?e=1706140800&v=beta&t=o9upEjDzw3AAqAXJuSlp6eZjz6hHAGV-FG8iV2nwlB4"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">ASSOCIATE DATA ENGINEER</h4>
        <p className="font-bold text-xl mt-1">BESTSELLER </p>
        <div className=" flex space-x-2 my-2">
          {/*tech used */}
          {/*tech used */}
          {/*tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started... - Ended ...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
