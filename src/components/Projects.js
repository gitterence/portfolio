import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import focusTimer from "../../public/focus_timer.png";
import darkPortfolio from "../../public/dark_portfolio.png";
import brightPortfolio from "../../public/bright_portfolio.png";
import roboFriends from "../../public/robo_friends.png";

const projects = [
  {
    title: "Focus Time",
    image: focusTimer,
    description:
      "A timer app that helps you to focus on a task via the Pomodoro method. React hooks like useState, useEffect, useContext, etc., are implemented to support countdown function and other settings.",
    tags: ["React", "Javascript", "CSS"],
    link: "https://gitterence.github.io/focus-time/",
  },
  {
    title: "This Portfolio",
    image: null, // Will be handled separately due to dark mode
    description:
      "A cool portfolio page for myself. Libraries such as Tailwind and Framer Motion are utilized to build a modern and visual appealing web page.",
    tags: ["React", "Tailwind", "NextJS", "FramerMotion"],
  },
  {
    title: "Robo Friends",
    image: roboFriends,
    description:
      "A cute robot friend contact list with a basic search function. It's actually my first react project.",
    tags: ["React", "Javascript"],
    link: "https://gitterence.github.io/robo-friends/",
  },
];

export default function Projects({ darkMode }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section>
      <h3 className="text-xl py-1 mb-5 dark:text-gray-200">Projects</h3>
      <div className="flex justify-center">
        <motion.div
          className="cursor-grab overflow-hidden"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="max-w-sm m-5 rounded-xl overflow-hidden shadow-lg dark:bg-gray-700"
                style={{ minWidth: "320px" }}
              >
                {project.title === "This Portfolio" ? (
                  darkMode ? (
                    <Image
                      src={brightPortfolio}
                      className="w-full h-60 object-cover pointer-events-none"
                      alt="dark portfolio"
                    />
                  ) : (
                    <Image
                      src={darkPortfolio}
                      className="w-full h-60 object-cover pointer-events-none"
                      alt="bright portfolio"
                    />
                  )
                ) : (
                  <Image
                    src={project.image}
                    className="w-full h-60 object-cover pointer-events-none"
                    alt={`${project.title} description`}
                  />
                )}
                <div className="px-6 py-4">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <div className="font-bold text-xl mb-2 dark:text-gray-200">
                      {project.title}
                    </div>
                    {project.link && (
                      <motion.a
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-sm font-semibold text-white px-2 py-1 rounded-xl"
                        whileHover={{ scale: 1.2 }}
                        href={project.link}
                        target="_blank"
                      >
                        View
                      </motion.a>
                    )}
                  </div>
                  <p className="text-base text-gray-800 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center text-md py-1 mb-5 dark:text-gray-200"
        animate={{ x: [0, 15, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="mr-3 font-mono">Swipe</p>
        <BsFillArrowRightCircleFill className="text-xl" />
      </motion.div>
    </section>
  );
} 