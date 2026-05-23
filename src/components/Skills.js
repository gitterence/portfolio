import { motion } from "framer-motion";

const skillCards = [
  {
    title: "Frontend Implementation",
    description: "Turning designs into actual user interface",
    skills: ["JavaScript", "TypeScript", "React, NextJS", "Tailwind CSS, Chakra UI",],
  },
  {
    title: "Backend Development",
    description: "Developing projects and services from the ground up",
    skills: [
      "Python, Java",
      "Flask, NodeJS, Spring",
      "RESTful, GRPC, Protobuf",
      "SQL Relational Databases",
    ],
  },
  {
    title: "Infrastructure",
    description: "Building the foundation that supports any systems",
    skills: ["AWS", "Docker", "Terraform", "GitLab CI/CD",],
  },
];

export default function Skills() {
  return (
    <div className="mb-6">
      <h3 className="py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Skills</h3>
      <div className="grid grid-cols-1 justify-items-center gap-4 md:gap-8 lg:grid-cols-3 lg:gap-8">
        {skillCards.map((card, index) => (
          <motion.div
            key={index}
            className="my-4 w-full max-w-sm rounded-lg border border-zinc-200 bg-[#FFFCF6] p-7 text-center shadow-sm transition-colors duration-300 sm:my-6 lg:my-10 dark:border-zinc-700 dark:bg-[#242428]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="pb-2 pt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {card.title}
            </h3>
            <p className="py-2 text-zinc-600 dark:text-zinc-400">
              {card.description}
            </p>
            {card.skills.map((skill, skillIndex) => (
              <p key={skillIndex} className="py-1 font-medium text-teal-700 dark:text-teal-400">
                {skill}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
