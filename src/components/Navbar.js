import { motion, useTime, useTransform } from "framer-motion";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({ darkMode, setDarkMode }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <nav className="py-10 mb-3 flex justify-between items-center">
      <h1 className="text-xl font-mono dark:text-gray-50">Portfolio</h1>
      <ul className="flex items-center">
        <motion.li 
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          className="group relative flex items-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 dark:from-gray-800/20 dark:to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {darkMode ? (
            <motion.div 
              style={{ rotate }}
              className="relative z-10 p-2 rounded-full hover:bg-gray-800/50 transition-colors duration-300 flex items-center justify-center"
            >
              <BsFillSunFill
                className="cursor-pointer text-2xl text-yellow-300 hover:text-yellow-200 transition-colors duration-300"
                onClick={() => setDarkMode(false)}
              />
            </motion.div>
          ) : (
            <motion.div 
              style={{ rotate }}
              className="relative z-10 p-2 rounded-full hover:bg-gray-100/50 transition-colors duration-300 flex items-center justify-center"
            >
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl text-gray-700 hover:text-gray-600 transition-colors duration-300"
                onClick={() => setDarkMode(true)}
              />
            </motion.div>
          )}
        </motion.li>
      </ul>
    </nav>
  );
}