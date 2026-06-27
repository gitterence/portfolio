"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="mb-10">
      <h3 className="mb-5 py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">About me</h3>
      <motion.div
        className="rounded-lg border border-zinc-200 bg-[#FFFCF6] p-5 shadow-sm transition-colors duration-300 md:p-8 dark:border-zinc-700 dark:bg-[#2B2C30]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-md py-2 leading-8 text-zinc-700 dark:text-zinc-300">
          Hi, I&apos;m Terence Ye, a <span className="font-medium text-teal-700 dark:text-teal-400">Software Engineer</span> at{" "}
          <a
            className="text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
            href="https://www.indeed.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indeed
          </a>
          {", "}where I design products and develop features that help millions of people find new career paths.
          With <span className="font-medium text-teal-700 dark:text-teal-400">7+ years of experience</span>,
          I combine my <span className="font-medium text-teal-700 dark:text-teal-400">full-stack skills</span> with{" "}
          <span className="font-medium text-teal-700 dark:text-teal-400">AI-assisted workflows</span> to build reliable and valuable software,
          from early-stage startups to large tech companies.
        </p>
        <p className="text-md py-2 leading-8 text-zinc-700 dark:text-zinc-300">
          My passion centers on creating innovative solutions and delivering exceptional user experiences. 
          This translates directly into my daily work, in which I thrive in dynamic environments where ideas are shared and refined. 
          I genuinely value contributing alongside talented teams from ideation to launch, 
          continually developing my skills as a well-rounded professional.
        </p>
      </motion.div>
    </div>
  );
} 
