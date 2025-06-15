import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profilepic from "../../public/ty_profile_pic.png";

export default function Hero() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="mb-16">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
      >
        <div className="text-center p-10">
          <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-5xl">
            Terence Ye
          </h2>
          <h3 className="text-xl py-2 md:text-2xl dark:text-gray-200">
            Engineer and Designer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
            Build software with purpose — designed for impact, engineered for performance.
          </p>
        </div>
      </motion.div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-300 w-20 h-20 mt-1 mb-6 p-1 rounded-full overflow-hidden md:h-32 md:w-32">
        <Image
          className="rounded-full"
          src={profilepic}
          priority={true}
          alt="profile-pic"
        />
      </div>
      <div className="text-4xl flex justify-center gap-16 py-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full bg-gray-200/50 dark:bg-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <AiFillLinkedin
            className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 relative z-10"
            onClick={() => openInNewTab("https://www.linkedin.com/in/terence-ye")}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full bg-gray-200/50 dark:bg-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <AiFillGithub
            className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 relative z-10"
            onClick={() => openInNewTab("https://github.com/gitterence")}
          />
        </motion.div>
      </div>
    </div>
  );
}