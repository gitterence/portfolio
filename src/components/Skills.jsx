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
    <div>
      <h3 className="py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Skills</h3>
      <div className="grid grid-cols-1 justify-items-stretch gap-4 md:gap-8 lg:grid-cols-3 lg:justify-items-center lg:gap-8">
        {skillCards.map((card, index) => (
          <motion.div
            key={index}
            className="my-4 flex flex-col w-full max-w-none rounded-xl border border-zinc-200 bg-[#FFFCF6] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-teal-500/50 sm:my-6 lg:my-10 lg:max-w-sm dark:border-zinc-700 dark:bg-[#2B2C30] dark:hover:border-teal-400/50 dark:hover:shadow-black/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {card.title}
              </h3>
            </div>
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {card.description}
            </p>
            <ul className="mt-auto space-y-3 border-t border-zinc-200 pt-4 lg:pt-5 dark:border-zinc-700">
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
