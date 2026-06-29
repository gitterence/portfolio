"use client";

import { useState, useEffect } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

// Animation Constants
const SUN_ROTATION_DURATION = 4000;
const MOON_ANIMATION_DURATION = 3;

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  
  const time = useTime();
  const rotate = useTransform(time, [0, SUN_ROTATION_DURATION], [0, 360], { clamp: false });

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = resolvedTheme === "dark";

  return (
    <nav className="mb-3 flex items-center justify-between py-8 md:py-10">
      <h1 className="font-mono text-xl text-zinc-800 dark:text-zinc-100">Portfolio</h1>
      <ul className="flex items-center">
        <motion.li 
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          className="group relative flex items-center"
        >
          <div className="absolute inset-0 rounded-full bg-zinc-200/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-zinc-700/60" />
          
          {mounted ? (
            isDarkMode ? (
              <motion.button
                type="button"
                aria-label="Switch to light mode"
                onClick={() => setTheme("light")}
                style={{ rotate }}
                className="relative z-10 flex items-center justify-center rounded-full p-2 transition-colors duration-300 hover:bg-zinc-700/60"
              >
                <BsFillSunFill
                  className="text-2xl text-yellow-300 transition-colors duration-300 hover:text-yellow-200"
                />
              </motion.button>
            ) : (
              <motion.button
                type="button"
                aria-label="Switch to dark mode"
                onClick={() => setTheme("dark")}
                className="relative z-10 flex items-center justify-center rounded-full p-2 transition-colors duration-300 hover:bg-zinc-200/70"
                animate={{
                  y: [0, -3, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: MOON_ANIMATION_DURATION,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <BsFillMoonStarsFill
                  className="text-2xl text-zinc-700 transition-colors duration-300 hover:text-zinc-900"
                />
              </motion.button>
            )
          ) : (
            <div className="relative z-10 flex items-center justify-center rounded-full p-2 w-10 h-10" />
          )}
        </motion.li>
      </ul>
    </nav>
  );
}
