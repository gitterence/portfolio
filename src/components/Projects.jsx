"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

import brightPortfolio from "../../public/bright_portfolio.webp";
import darkPortfolio from "../../public/dark_portfolio.webp";
import focusTimer from "../../public/focus_timer.webp";
import roboFriends from "../../public/robo_friends.webp";
import skyLite from "../../public/skylite.webp";
import todoList from "../../public/todo_list.webp";

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

const viewLinkStyles = "group/view inline-flex min-w-[5.25rem] items-center justify-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/75 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur transition-[background-color,border-color,box-shadow,color] duration-200 ease-out supports-hover:border-teal-500/40 supports-hover:bg-white supports-hover:text-zinc-950 supports-hover:shadow-md active:border-teal-500/50 active:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/25 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200 dark:supports-hover:border-teal-400/40 dark:supports-hover:bg-zinc-800 dark:supports-hover:text-white dark:active:border-teal-400/50 dark:active:bg-zinc-800";

function ProjectItem({ project, index, mounted, isDarkMode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const canShowSpotlight = (e) => (
    e.pointerType === "mouse" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  const handlePointerMove = (e) => {
    if (!canShowSpotlight(e)) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePointerEnter = (e) => {
    if (canShowSpotlight(e)) setIsHovering(true);
  };

  const handlePointerLeave = () => setIsHovering(false);

  const handlePointerDown = (e) => {
    if (!canShowSpotlight(e)) setIsHovering(false);
  };

  return (
    <motion.li 
      className="group relative flex items-center justify-between gap-x-4 py-4 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl transition-colors supports-hover:bg-zinc-50/50 dark:supports-hover:bg-zinc-800/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
    >
      {/* Spotlight Overlay */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.12), transparent 40%)`,
          }}
        />
      )}

      <div className="relative z-10 flex min-w-0 flex-1 gap-x-4">
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
      <div className="relative z-10 flex min-w-14 shrink-0 justify-end">
        {project.link && (
          <a
            className={viewLinkStyles}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} project`}
          >
            <span>View</span>
            <BsArrowUpRight className="text-[0.7rem]" />
          </a>
        )}
      </div>
    </motion.li>
  );
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = resolvedTheme === "dark";

  return (
    <div>
      <h3 className="mb-5 py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Personal Projects
      </h3>
      <div className="w-full">
        <ul role="list" className="flex flex-col gap-1">
          {projects.map((project, index) => (
            <ProjectItem 
              key={project.title} 
              project={project} 
              index={index} 
              mounted={mounted} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
