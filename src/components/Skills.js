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
    <div>
      <h3 className="text-2xl font-semibold py-1 dark:text-gray-200">Skills</h3>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-10">
        {skillCards.map((card, index) => (
          <motion.div
            key={index}
            className="max-w-sm bg-gradient-to-br from-gray-50 to-gray-100 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] p-10 rounded-xl my-10 border border-gray-200 transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:from-gray-700 dark:to-gray-800 dark:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.3)] dark:hover:border-gray-500"
            style={{ minWidth: "320px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 dark:text-gray-200">
              {card.title}
            </h3>
            <p className="text-gray-600 py-2 dark:text-gray-300">
              {card.description}
            </p>
            {card.skills.map((skill, skillIndex) => (
              <p key={skillIndex} className="py-1 text-teal-600 font-medium dark:text-teal-400">
                {skill}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}