import { motion } from "framer-motion";

const skillCards = [
  {
    title: "Frontend Implementation",
    description: "Turning designs into actual user interface",
    skills: ["React", "NodeJS", "JavaScript", "TypeScript", "HTML & CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing projects and services from the ground up",
    skills: [
      "Python, Java",
      "Flask, Spring",
      "RESTful, GRPC, Protobuf",
      "SQL Relational Databases",
      "Data Structure & Algorithms",
    ],
  },
  {
    title: "Infrastructure",
    description: "Building the foundation that supports any systems",
    skills: ["AWS", "Script", "Docker", "Terraform", "GitLab CI/CD"],
  },
];

export default function Skills() {
  return (
    <section>
      <div className="mb-10">
        <h3 className="text-2xl font-semibold py-1 mb-5 dark:text-gray-200">About me</h3>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:bg-gray-700 dark:border-gray-600 dark:from-gray-700 dark:to-gray-800">
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
            Hi, my name is Terence Ye. I currently work as a{" "}
            <span className="text-teal-500 font-medium">Software Engineer</span> at{" "}
            <a
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200 hover:underline"
              href="https://www.indeed.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indeed.com
            </a>
            , where I design products and develop features that connect millions of
            people with new career opportunities every day. With over{" "}
            <span className="text-teal-500 font-medium">6+ years of experience</span>, I&apos;ve
            had the privilege of building software with{" "}
            <span className="text-teal-500 font-medium">Full-Stack Skills</span> for companies
            from start-ups to tech corporations. I&apos;m constantly driven to
            enhance my abilities and become a well-rounded professional.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
            Crafting innovative solutions and creating seamless user experiences are
            areas that I am passionate about. Meanwhile, collaboration and open
            communication are essential to my work, as I thrive in dynamic
            environments where ideas are shared and refined. Hence, the opportunity
            to work alongside my talented teams from the initial stages of ideation
            to the exhilarating launch is an experience I truly cherish.
          </p>
        </div>
      </div>

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
    </section>
  );
}