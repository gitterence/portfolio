import React from 'react';
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold py-1 mb-5 dark:text-gray-200">About me</h3>
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:from-gray-700 dark:to-gray-800 dark:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.3)] dark:hover:border-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          Hi, I am Terence Ye. A <span className="text-teal-500 font-medium">Software Engineer</span> at{" "}
          <a
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200 hover:underline"
            href="https://www.indeed.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indeed
          </a>
          , where I design products and develop features that help millions of people find new career paths. 
          With over <span className="text-teal-500 font-medium">6+ years of experience</span>,
          I&apos;ve leveraged my <span className="text-teal-500 font-medium">full-stack</span>  
          {" "}expertise to build impactful software, from early-stage startups to large tech companies.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          My passion centers on creating innovative solutions and delivering exceptional user experiences. 
          This translates directly into my daily work, in which I thrive in dynamic environments where ideas are shared and refined. 
          I genuinely value contributing alongside talented teams from ideation to launch, 
          continually developing my skills as a well-rounded professional.
        </p>
      </motion.div>
    </div>
  );
} 