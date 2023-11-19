import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My name is Lilla", "Kontra Lilla"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        height={400}
        width={400}
        className="relative flex-shrink-0 w-56 h-56 rounded-full mx-auto object-cover"
        src="/images/LillaKontraGit.png"
        alt=""
        aria-label=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">
          {" "}
          Software & Business Engineering Student
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="gray" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#project">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
