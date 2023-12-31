import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lilla &apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-almostBlack text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-offGray scrollbar-thumb-brownPrimary/20">
        {" "}
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        {/* Projects */}
        <section id="project" className="snap-start">
          <Projects />
        </section>
        {/* Contact Me */}
        <section id="contactme" className="snap-start">
          <ContactMe />
        </section>
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
            <div className=" border border-brownPrimary/25 rounded-full h-10 w-10 mt-52"></div>
          </footer>
        </Link>
      </div>
    </>
  );
}
