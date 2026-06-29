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
        <li className="flex size-10 items-center justify-center">
          {mounted ? (
            isDarkMode ? (
              <motion.button
                type="button"
                aria-label="Switch to light mode"
                onClick={() => setTheme("light")}
                className="flex size-10 items-center justify-center rounded-full transition-colors duration-300 supports-hover:bg-zinc-700/60 active:bg-zinc-700/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/30"
                whileTap={{ scale: 0.9 }}
              >
                <motion.span style={{ rotate }} className="flex items-center justify-center">
                  <BsFillSunFill
                    className="text-2xl text-yellow-300 transition-colors duration-300 supports-hover:text-yellow-200"
                  />
                </motion.span>
              </motion.button>
            ) : (
              <motion.button
                type="button"
                aria-label="Switch to dark mode"
                onClick={() => setTheme("dark")}
                className="flex size-10 items-center justify-center rounded-full transition-colors duration-300 supports-hover:bg-zinc-200/70 active:bg-zinc-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/25"
                whileTap={{ scale: 0.9 }}
              >
                <motion.span
                  className="flex items-center justify-center"
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
                    className="text-2xl text-zinc-700 transition-colors duration-300 supports-hover:text-zinc-900"
                  />
                </motion.span>
              </motion.button>
            )
          ) : (
            <div className="size-10 rounded-full" />
          )}
        </li>
      </ul>
    </nav>
  );
}
