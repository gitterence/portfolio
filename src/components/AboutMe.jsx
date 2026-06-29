"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  const highlightClass = "font-medium text-teal-700 dark:text-teal-400 transition-[color,text-shadow] duration-300 cursor-default hover:text-teal-600 dark:hover:text-teal-300 hover:[text-shadow:0_0_12px_rgba(15,118,110,0.4)] dark:hover:[text-shadow:0_0_12px_rgba(45,212,191,0.6)]";

  return (
    <div>
      <h3 className="mb-5 py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">About me</h3>
      <motion.div
        className="rounded-lg border border-zinc-200 bg-[#FFFCF6] p-5 shadow-sm transition-colors duration-300 md:p-8 dark:border-zinc-700 dark:bg-[#2B2C30]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-base py-2 leading-8 text-zinc-700 dark:text-zinc-300">
          Hi, I&apos;m Terence Ye, a <span className={highlightClass}>Software Engineer</span> at{" "}
          <a
            className="rounded-sm text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/25 dark:text-blue-400 dark:hover:text-blue-300"
            href="https://www.indeed.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indeed
          </a>
          {", "}where I design products and develop features that help millions of people find new career paths.
          With <span className={highlightClass}>7+ years of experience</span>,
          I combine my <span className={highlightClass}>full-stack skills</span> with{" "}
          <span className={highlightClass}>AI-assisted workflows</span> to build reliable and valuable software,
          from early-stage startups to large tech companies.
        </p>
        <p className="text-base py-2 leading-8 text-zinc-700 dark:text-zinc-300">
          My passion centers on creating innovative solutions and delivering exceptional user experiences.
          This translates directly into my daily work, in which I thrive in dynamic environments where ideas are shared and refined.
          I genuinely value contributing alongside talented teams from ideation to launch,
          continually developing my skills as a well-rounded professional.
        </p>
      </motion.div>
    </div>
  );
}
