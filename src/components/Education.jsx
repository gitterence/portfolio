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

function EducationItem({ item, index, isLast }) {
  return (
    <motion.li
      className="grid grid-cols-[3rem_1fr] gap-x-4 md:grid-cols-[3.5rem_1fr] md:gap-x-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
    >
      <div className="relative flex justify-center">
        <div className="relative z-10 flex size-12 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-[#FFFCF6] shadow-sm dark:border-zinc-700 dark:bg-[#2B2C30]">
          <Image
            src={item.logo}
            alt={`${item.school} logo`}
            className={item.logoClassName}
            unoptimized // Required for Next.js static exports (output: "export") and SVGs
          />
        </div>
        {!isLast && (
          <div className="absolute left-1/2 top-12 h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-700/50 md:h-[calc(100%+2rem)]" />
        )}
      </div>

      <div className="flex min-h-12 w-full flex-col justify-center pt-0.5 md:flex-row md:items-center md:justify-between md:pt-0">
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
      <div>
        <ul role="list" className="flex flex-col gap-6 md:gap-8 pb-4">
          {educationItems.map((item, index) => (
            <EducationItem
              key={item.school}
              item={item}
              index={index}
              isLast={index === educationItems.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
