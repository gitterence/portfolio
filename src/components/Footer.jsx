"use client";

import { motion } from "framer-motion";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
export default function Footer() {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <motion.button
          type="button"
          className="text-base flex cursor-pointer items-center rounded-full bg-[#FFFCF6]/80 px-4 py-2 text-zinc-700 transition-colors duration-300 hover:bg-white dark:bg-[#2B2C30] dark:text-zinc-200 dark:hover:bg-zinc-700/80"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BsFillArrowUpCircleFill className="mr-2 text-xl text-teal-700 dark:text-teal-400" />
          <span className="font-mono">Back to Top</span>
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
