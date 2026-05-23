import Image from "next/image";

// Project Images
import focusTimer from "../../public/focus_timer.png";
import darkPortfolio from "../../public/dark_portfolio.png";
import brightPortfolio from "../../public/bright_portfolio.png";
import roboFriends from "../../public/robo_friends.png";
import todoList from "../../public/todo_list_example.png";
import skyLite from "../../public/sky-lite.png";

// Project Data
const projects = [
  {
    title: "Sky Lite",
    image: skyLite,
    imageForBrightMode: skyLite,
    description:
      "A minimal weather app with city search, location-based forecasts, and a relaxed responsive interface.",
    tags: ["React", "Vite", "Tailwind", "OpenWeather"],
    link: "https://gitterence.github.io/weather/",
  },
  {
    title: "To-Do List",
    image: todoList,
    imageForBrightMode: todoList,
    description: "A simple to-do list application.",
    tags: ["React", "Javascript", "Tailwind"],
    link: "https://gitterence.github.io/to-do-list/",
  },
  {
    title: "Focus Time",
    image: focusTimer,
    imageForBrightMode: focusTimer,
    description: "A minimalist timer with Pomodoro method that helps you stay focused and boost productivity.",
    tags: ["React", "Javascript", "CSS"],
    link: "https://gitterence.github.io/focus-time/",
  },
  {
    title: "This Portfolio",
    image: brightPortfolio,
    imageForBrightMode: darkPortfolio,
    description: "A modern, responsive portfolio utilizing libraries like React, Tailwind and Framer Motion.",
    tags: ["React", "Tailwind", "NextJS", "FramerMotion"],
  },
  {
    title: "Robo Friends",
    image: roboFriends,
    imageForBrightMode: roboFriends,
    description: "A cute robot friend contact list with a basic search function.",
    tags: ["React", "Javascript"],
    link: "https://gitterence.github.io/robo-friends/",
  },
];

// Button Styles
const viewButtonStyles = "rounded-full bg-zinc-800 px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-zinc-700 active:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-600/30 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white";

export default function Projects({ darkMode }) {
  return (
    <div className="mb-10">
      <h3 className="mb-5 py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Personal Projects
      </h3>
      <div className="w-full">
        <ul role="list" className="divide-y divide-zinc-200/80 dark:divide-zinc-700">
          {projects.map((project) => (
            <li key={project.title} className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <div className="relative size-16 flex-none overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={darkMode ? project.image : project.imageForBrightMode}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm/6 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="shrink-0 pl-20 sm:flex sm:flex-col sm:items-end sm:pl-0">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={viewButtonStyles}>
                      View
                    </button>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
