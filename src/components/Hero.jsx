"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profilepic from "../../public/ty_profile_pic.png";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  return (
    <div className="mb-14 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="px-2 py-9 text-center md:p-10">
          <h2 className="py-2 text-4xl font-semibold text-teal-700 md:text-5xl dark:text-teal-400">
            Terence Ye
          </h2>
          <TypewriterText 
            as="h3"
            text="Engineer and Designer"
            className="py-2 text-xl font-medium text-zinc-800 md:text-2xl dark:text-zinc-100"
            delay={500}
          />
          <div className="min-h-[80px]">
            <TypewriterText 
              as="p"
              text="Building practical software with thoughtful design and reliable engineering."
              className="text-md mx-auto max-w-lg py-5 leading-8 text-zinc-600 md:text-xl dark:text-zinc-400"
              delay={1600} // Wait for role to finish typing
            />
          </div>
        </div>
      </motion.div>
      <div className="relative mx-auto mb-6 mt-1 h-20 w-20 overflow-hidden rounded-full bg-teal-500 p-1 shadow-sm md:h-32 md:w-32">
        <Image
          className="rounded-full"
          src={profilepic}
          priority={true}
          alt="profile-pic"
        />
      </div>
      <div className="flex justify-center gap-16 py-3 text-4xl">
        <motion.a
          href="https://www.linkedin.com/in/terence-ye"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Terence Ye's LinkedIn profile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full bg-zinc-200/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-zinc-700/60" />
          <AiFillLinkedin
            className="relative z-10 cursor-pointer text-zinc-600 transition-colors duration-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          />
        </motion.a>
        <motion.a
          href="https://github.com/gitterence"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Terence Ye's GitHub profile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full bg-zinc-200/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-zinc-700/60" />
          <AiFillGithub
            className="relative z-10 cursor-pointer text-zinc-600 transition-colors duration-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          />
        </motion.a>
      </div>
    </div>
  );
}
