import { motion } from "framer-motion";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Quote() {
  return (
    <div>
      <div className="mt-5 pb-5">
        <h3 className="text-2xl font-semibold py-1 mb-5 dark:text-gray-200">Lastly</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          &quot;
          <span className="text-teal-500">
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
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          May today mark the beginning of our incredible journey.
        </p>
      </div>

      <div className="flex justify-center">
        <motion.div
          className="flex items-center text-md py-2 px-4 dark:text-gray-200 cursor-pointer mt-3 rounded-full bg-gray-50/50 hover:bg-gray-100/50 dark:bg-gray-700/50 dark:hover:bg-gray-600/50 transition-colors duration-300"
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
          <BsFillArrowUpCircleFill className="text-xl mr-2 text-teal-500" />
          <p className="font-mono text-gray-600 dark:text-gray-300">Back to Top</p>
        </motion.div>
      </div>
    </div>
  );
}