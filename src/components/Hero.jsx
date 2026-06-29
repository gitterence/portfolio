"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profilepic from "../../public/ty_profile_pic.webp";
import TypewriterText from "./TypewriterText";

const socialLinkStyles = "flex size-12 items-center justify-center rounded-full border border-transparent text-zinc-600 transition-[background-color,border-color,box-shadow,color] duration-300 hover:border-zinc-200 hover:bg-white/80 hover:text-zinc-900 hover:shadow-sm active:border-zinc-200 active:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/25 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100 dark:active:border-zinc-700 dark:active:bg-zinc-800";

export default function Hero() {
  return (
    <div>
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
          <TypewriterText 
            as="p"
            text="Building practical software with thoughtful design and reliable engineering."
            className="text-base mx-auto max-w-lg py-5 leading-8 text-zinc-600 md:text-xl dark:text-zinc-400"
            delay={1600} // Wait for role to finish typing
          />
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
      <div className="flex justify-center gap-8 py-3 sm:gap-12">
        <motion.a
          href="https://www.linkedin.com/in/terence-ye"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Terence Ye's LinkedIn profile"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          className={socialLinkStyles}
        >
          <AiFillLinkedin
            className="text-[2rem]"
          />
        </motion.a>
        <motion.a
          href="https://github.com/gitterence"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Terence Ye's GitHub profile"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          className={socialLinkStyles}
        >
          <AiFillGithub
            className="text-[2rem]"
          />
        </motion.a>
      </div>
    </div>
  );
}
