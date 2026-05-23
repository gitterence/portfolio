"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-[#F7F5F0] px-5 text-zinc-900 sm:px-8 md:px-16 lg:px-20 dark:bg-[#202124] dark:text-zinc-100">
        <motion.div
          className="m-auto max-w-screen-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects darkMode={darkMode} />
          <Quote />
          <Footer />
        </motion.div>
      </main>
    </div>
  );
}
