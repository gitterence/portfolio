"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

const themeColors = {
  dark: "#202124",
  light: "#F7F5F0",
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

    if (typeof prefersDark === "boolean") {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    let themeColor = document.querySelector('meta[name="theme-color"]');

    if (!themeColor) {
      themeColor = document.createElement("meta");
      themeColor.setAttribute("name", "theme-color");
      document.head.appendChild(themeColor);
    }

    themeColor.setAttribute(
      "content",
      darkMode ? themeColors.dark : themeColors.light
    );
  }, [darkMode]);

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
