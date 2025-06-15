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
      <main className="bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-800">
        <motion.div
          className="max-w-screen-lg m-auto"
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
