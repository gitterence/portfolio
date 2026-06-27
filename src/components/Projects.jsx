"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import brightPortfolio from "../../public/bright_portfolio.png";
import darkPortfolio from "../../public/dark_portfolio.png";
import focusTimer from "../../public/focus_timer.png";
import roboFriends from "../../public/robo_friends.png";
import skyLite from "../../public/sky-lite.png";
import todoList from "../../public/todo_list.png";

const projects = [
  {
    title: "Sky Lite",
    image: skyLite,
    imageForBrightMode: skyLite,
    description:
      "A minimal weather app with city search, location-based forecasts, and a relaxed responsive interface.",
    link: "https://gitterence.github.io/weather/",
  },
  {
    title: "To-Do List",
    image: todoList,
    imageForBrightMode: todoList,
    description: "A clean to-do list application with task management and an intuitive user interface.",
    link: "https://gitterence.github.io/to-do-list/",
  },
  {
    title: "Focus Time",
    image: focusTimer,
    imageForBrightMode: focusTimer,
    description: "A minimalist timer with Pomodoro method that helps you stay focused and boost productivity.",
    link: "https://gitterence.github.io/focus-time/",
  },
  {
    title: "This Portfolio",
    image: brightPortfolio,
    imageForBrightMode: darkPortfolio,
    description: "A modern, responsive portfolio utilizing libraries like React, Tailwind and Framer Motion.",
  },
  {
    title: "Robo Friends",
    image: roboFriends,
    imageForBrightMode: roboFriends,
    description: "A cute robot friend contact list with a basic search function.",
    link: "https://gitterence.github.io/robo-friends/",
  },
];

const viewLinkStyles = "inline-flex rounded-full bg-zinc-800 px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-zinc-700 active:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-600/30 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="mb-10">
      <h3 className="mb-5 py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Personal Projects
      </h3>
      <div className="w-full">
        <ul role="list" className="divide-y divide-zinc-200/80 dark:divide-zinc-700">
          {projects.map((project) => (
            <li key={project.title} className="flex items-center justify-between gap-x-4 py-5 sm:gap-x-6">
              <div className="flex min-w-0 flex-1 gap-x-4">
                <div className="relative size-16 flex-none overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={mounted && isDarkMode ? project.image : project.imageForBrightMode}
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
              <div className="flex min-w-14 shrink-0 justify-end">
                {project.link && (
                  <a
                    className={viewLinkStyles}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
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
