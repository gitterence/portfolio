import { motion } from "framer-motion";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Quote() {
  return (
    <div>
      <div className="mt-5 pb-5">
        <h3 className="mb-5 py-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Lastly</h3>
        <p className="text-md py-2 leading-8 text-zinc-700 dark:text-zinc-300">
          &quot;
          <span className="text-teal-700 dark:text-teal-400">
            A journey of a thousand miles begins with a single step
          </span>
          &quot;, by Lao Tzu, is a guiding principle for me.
          While the odyssey ahead may appear daunting and seemingly endless,
          I firmly believe that each of us possesses the capability to proceed one
          step at a time, and that progress is attained through steady momentum. As
          we navigate this route, we may encounter numerous obstacles and
          uncertainties, but by maintaining determination and focusing on the
          present moment, we can overcome any challenge that crosses our path.
        </p>
        <p className="text-md py-2 leading-8 text-zinc-700 dark:text-zinc-300">
          May today mark the beginning of our incredible journey.
        </p>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="text-md mt-3 flex cursor-pointer items-center rounded-full bg-[#FFFCF6]/80 px-4 py-2 text-zinc-700 transition-colors duration-300 hover:bg-white dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:bg-zinc-700/80"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BsFillArrowUpCircleFill className="mr-2 text-xl text-teal-700 dark:text-teal-400" />
          <p className="font-mono">Back to Top</p>
        </motion.div>
      </div>
    </div>
  );
}
