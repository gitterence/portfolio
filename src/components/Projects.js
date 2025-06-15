import Image from "next/image";
import focusTimer from "../../public/focus_timer.png";
import darkPortfolio from "../../public/dark_portfolio.png";
import brightPortfolio from "../../public/bright_portfolio.png";
import roboFriends from "../../public/robo_friends.png";

const projects = [
  {
    title: "Focus Time",
    image: focusTimer,
    imageForBrightMode: focusTimer,
    description:
      "A minimalist Pomodoro timer that helps you stay focused and boost productivity.",
    tags: ["React", "Javascript", "CSS"],
    link: "https://gitterence.github.io/focus-time/",
  },
  {
    title: "This Portfolio",
    image: brightPortfolio,
    imageForBrightMode: darkPortfolio,
    description:
      "A modern, responsive portfolio utilizing libraries like React,Tailwind and Framer Motion.",
    tags: ["React", "Tailwind", "NextJS", "FramerMotion"],
  },
  {
    title: "Robo Friends",
    image: roboFriends,
    imageForBrightMode: roboFriends,
    description:
      "A cute robot friend contact list with a basic search function.",
    tags: ["React", "Javascript"],
    link: "https://gitterence.github.io/robo-friends/",
  },
];

export default function Projects({ darkMode }) {
  return (
    <section>
      <h3 className="text-2xl font-semibold py-1 mb-5 dark:text-gray-200">Personal Projects</h3>
      <div className="w-full">
        <ul role="list" className="divide-y divide-gray-100">
        {projects.map((project) => (
          <li key={project.title} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="relative size-16 flex-none rounded-full bg-gray-50 dark:bg-gray-800 overflow-hidden">
                <Image
                  src={darkMode ? project.image : project.imageForBrightMode}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">{project.title}</p>
                <p className="mt-1 truncate text-sm/6 text-gray-500 dark:text-gray-400">{project.description}</p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              {project.link ? (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-cyan-500 hover:bg-cyan-700 text-white text-xs font-bold py-1 px-3 rounded-full">
                    View
                  </button>
                </a>
              ) : null}
            </div>
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
}