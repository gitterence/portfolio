"use client";

import { motion } from "framer-motion";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <motion.button
          type="button"
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur transition-[background-color,border-color,box-shadow,color] duration-300 hover:border-teal-500/40 hover:bg-white hover:text-zinc-900 hover:shadow-md active:border-teal-500/50 active:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/25 dark:border-zinc-700 dark:bg-[#2B2C30]/85 dark:text-zinc-200 dark:hover:border-teal-400/40 dark:hover:bg-zinc-800/90 dark:hover:text-white dark:active:border-teal-400/50 dark:active:bg-zinc-800/90"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-teal-700 text-white transition-colors duration-300 group-hover:bg-teal-600 dark:bg-teal-400 dark:text-zinc-950 dark:group-hover:bg-teal-300">
            <BsArrowUpShort className="text-xl" />
          </span>
          <span className="pr-1">Back to top</span>
        </motion.button>
      </div>

      <hr className="mt-6 border-zinc-200 sm:mx-auto lg:my-8 dark:border-zinc-700" />

      <div className="flex justify-end">
        <div className="flex items-center text-zinc-700 dark:text-zinc-300">
          <AiFillCopyrightCircle className="mr-1" />
          <p className="text-sm py-1 leading-8">2023 - 2026 Terence Ye</p>
        </div>
      </div>
    </div>
  );
}
