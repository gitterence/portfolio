"use client";

import { motion } from "framer-motion";

const skillCards = [
  {
    title: "Frontend",
    description: "Building polished, maintainable user experiences",
    skills: [
      "React, TypeScript, JavaScript",
      "Responsive UI Development",
      "State and Data Flow",
      "Modern Frontend Tooling",
    ],
  },
  {
    title: "Backend",
    description: "Developing robust services, APIs, and data models",
    skills: [
      "Python, Java, Node.js",
      "API Design: REST, gRPC",
      "SQL Data Modeling",
      "Service Architecture",
    ],
  },
  {
    title: "Infrastructure",
    description: "Shipping scalable systems with consistent delivery pipelines",
    skills: [
      "AWS Cloud Services",
      "CI/CD Pipelines",
      "Docker and Terraform",
      "Monitoring and Reliability",
    ],
  },
];

export default function Skills() {
  return (
    <div className="mb-6">
      <h3 className="py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Skills</h3>
      <div className="grid grid-cols-1 justify-items-stretch gap-4 md:gap-8 lg:grid-cols-3 lg:justify-items-center lg:gap-8">
        {skillCards.map((card, index) => (
          <motion.div
            key={index}
            className="my-4 flex min-h-[300px] w-full max-w-none flex-col rounded-lg border border-zinc-200 bg-[#FFFCF6] p-6 shadow-sm transition-colors duration-300 sm:my-6 lg:my-10 lg:max-w-sm dark:border-zinc-700 dark:bg-[#2B2C30]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {card.title}
              </h3>
            </div>
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400 lg:min-h-[56px]">
              {card.description}
            </p>
            <ul className="mt-4 space-y-3 border-t border-zinc-200 pt-4 lg:mt-6 lg:pt-5 dark:border-zinc-700">
              {card.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex gap-3 text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-200">
                  <span className="mt-2 size-1.5 flex-none rounded-full bg-teal-700 dark:bg-teal-400" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
