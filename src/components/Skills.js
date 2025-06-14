import { motion } from "framer-motion";

const skillCards = [
  {
    title: "Frontend Implementation",
    description: "Turning designs into actual user interface",
    skills: ["React", "Angular", "Javascript", "Typescript", "HTML & CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing projects and services from the ground up",
    skills: [
      "Java, Python, C#",
      "Spring",
      "GraphQL",
      "Restful API",
      "SQL Relational Database",
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
        <h3 className="text-xl py-1 mb-5 dark:text-gray-200">About me</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          Hi, my name is Terence Ye. I currently work as a{" "}
          <span className="text-teal-500">Software Engineer</span> at{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.indeed.com/about"
            target="_blank"
          >
            Indeed.com
          </a>
          , where I design products and develop features that connect millions of
          people with new career opportunities every day. With over{" "}
          <span className="text-teal-500">5+ years of experience</span>, I&apos;ve
          had the privilege of building software with{" "}
          <span className="text-teal-500">Full-Stack Skills</span> for companies
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

      <h3 className="text-xl py-1 dark:text-gray-200">Skills</h3>

      <div className="lg:flex gap-10 lg:justify-center">
        {skillCards.map((card, index) => (
          <motion.div
            key={index}
            className="max-w-sm bg-gray-50/25 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700"
            style={{ minWidth: "320px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
              {card.title}
            </h3>
            <p className="text-gray-800 py-2 dark:text-gray-300">
              {card.description}
            </p>
            {card.skills.map((skill, skillIndex) => (
              <p key={skillIndex} className="py-1 text-teal-600">
                {skill}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 