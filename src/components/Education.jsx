"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import uwLogo from "../../public/uw_logo.svg";
import gtLogo from "../../public/gt_logo.svg";

const educationItems = [
  {
    school: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science",
    logo: gtLogo,
    logoClassName: "size-10 object-contain",
  },
  {
    school: "University of Wisconsin–Madison",
    degree: "Bachelor of Science in Computer Science",
    logo: uwLogo,
    logoClassName: "size-10 object-contain",
  },
];

function EducationItem({ item, index }) {
  return (
    <motion.li
      className="relative pl-8 md:pl-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
    >
      {/* Timeline dot/logo */}
      <div className="absolute -left-6 top-1 md:top-2 flex size-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-zinc-900/10">
        <Image
          src={item.logo}
          alt={`${item.school} logo`}
          className={item.logoClassName}
          unoptimized // Required for Next.js static exports (output: "export") and SVGs
        />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between min-h-12 pt-1 md:pt-0 w-full">
        <h4 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {item.school}
        </h4>
        <p className="mt-1 md:mt-0 text-sm md:text-base text-zinc-600 dark:text-zinc-400 md:text-right">
          {item.degree}
        </p>
      </div>
    </motion.li>
  );
}

export default function Education() {
  return (
    <div>
      <h3 className="mb-5 py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Education
      </h3>
      <div className="relative border-l border-zinc-200 dark:border-zinc-700/40 ml-6 md:ml-8">
        <ul role="list" className="flex flex-col gap-6 md:gap-8 pb-4">
          {educationItems.map((item, index) => (
            <EducationItem key={item.school} item={item} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
