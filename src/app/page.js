"use client";

import { useEffect, useState } from "react";
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
    const themeColorValue = darkMode ? themeColors.dark : themeColors.light;
    const themeColorTags = document.querySelectorAll('meta[name="theme-color"]');
    let themeColor = themeColorTags[0];

    if (!themeColor) {
      themeColor = document.createElement("meta");
      themeColor.setAttribute("name", "theme-color");
      document.head.appendChild(themeColor);
    }

    themeColor.removeAttribute("media");
    themeColor.setAttribute("content", themeColorValue);
    themeColorTags.forEach((tag, index) => {
      if (index > 0) {
        tag.remove();
      }
    });
    document.documentElement.style.setProperty("--app-bg", themeColorValue);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-[#F7F5F0] px-5 text-zinc-900 sm:px-8 md:px-16 lg:px-20 dark:bg-[#202124] dark:text-zinc-100">
        <div className="m-auto max-w-screen-lg">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects darkMode={darkMode} />
          <Quote />
          <Footer />
        </div>
      </main>
    </div>
  );
}
