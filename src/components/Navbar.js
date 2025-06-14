import { motion } from "framer-motion";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 mb-3 flex justify-between">
      <h1 className="text-xl font-mono dark:text-gray-50">Portfolio</h1>
      <ul className="flex items-center">
        <motion.li whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}>
          {darkMode ? (
            <BsFillSunFill
              className="cursor-pointer text-2xl text-white"
              onClick={() => setDarkMode(false)}
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl"
              onClick={() => setDarkMode(true)}
            />
          )}
        </motion.li>
      </ul>
    </nav>
  );
}