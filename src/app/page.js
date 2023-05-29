"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import focusTimer from "../../public/focus_timer.png";
import profilepic from "../../public/ty_profile_pic.png";
import darkPortfolio from "../../public/dark_portfolio.png";
import brightPortfolio from "../../public/bright_portfolio.png";
import ipLocationMatching from "../../public/ip_location_matching.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCopyrightCircle,
} from "react-icons/ai";
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {/*  Section 1  */}
          <section className="mb-16">
            <nav className="py-10 mb-3 flex justify-between">
              <h1 className="text-xl font-mono dark:text-gray-50">Portfolio</h1>
              <ul className="flex items-center">
                <motion.li
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                >
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
                  Creating software to help people reach their goals
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
            <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillLinkedin
                className="cursor-pointer"
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/terence-ye")
                }
              />
              <AiFillGithub
                className="cursor-pointer"
                onClick={() => openInNewTab("https://github.com/gitterence")}
              />
            </div>
          </section>

          {/*  Section 2  */}
          <section>
            <div className="mb-10">
              <h3 className="text-xl py-1 mb-5 dark:text-gray-200">About me</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                Hi, my name is Terence Ye. I currently work as a{" "}
                <span className="text-teal-500">Software Engineer</span> at{" "}
                <a
                  className="text-blue-500 hover:underline"
                  href="https://www.indeed.com/about"
                  target="_blank"
                >
                  Indeed.com
                </a>
                , where I design products and develop features that connect
                millions of people with new career opportunities every day. With
                over{" "}
                <span className="text-teal-500">4+ years of experience</span>,
                I&apos;ve had the privilege of building software with{" "}
                <span className="text-teal-500">Full-Stack Skills</span> for
                companies from start-ups to tech corporations. I&apos;m
                constantly driven to enhance my abilities and become a
                well-rounded professional.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                Crafting innovative solutions and creating seamless user
                experiences are areas that I am passionate about. Meanwhile,
                collaboration and open communication are essential to my work,
                as I thrive in dynamic environments where ideas are shared and
                refined. Hence, the opportunity to work alongside my talented
                teams from the initial stages of ideation to the exhilarating
                launch is an experience I truly cherish.
              </p>
            </div>

            <h3 className="text-xl py-1 dark:text-gray-200"> Skills</h3>

            {/*  Cards  */}
            <div className="lg:flex gap-10 lg:justify-center">
              {/*  Card FE  */}
              <div className="max-w-sm bg-gray-50/25 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700">
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                  Frontend Implementation
                </h3>
                <p className="text-gray-800 py-2 dark:text-gray-300">
                  Turning designs into actual User Interface
                </p>

                <p className="py-1 text-teal-600">React</p>
                <p className="py-1 text-teal-600">Angular</p>
                <p className="py-1 text-teal-600">Javascript</p>
                <p className="py-1 text-teal-600">Typescript</p>
                <p className="py-1 text-teal-600">HTML & CSS</p>
              </div>

              {/*  Card BE  */}
              <div className="max-w-sm bg-gray-50/25 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700">
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                  Backend Development
                </h3>
                <p className="text-gray-800 py-2 dark:text-gray-300">
                  Developing projects and services from ground-up
                </p>

                <p className="py-1 text-teal-600">Java, Python, C#</p>
                <p className="py-1 text-teal-600">Spring</p>
                <p className="py-1 text-teal-600">GraphQL</p>
                <p className="py-1 text-teal-600">Restful API</p>
                <p className="py-1 text-teal-600">SQL Relational Database</p>
              </div>

              {/*  Card Infra  */}
              <div className="max-w-sm bg-gray-50/25 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700">
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                  Infrastructure
                </h3>
                <p className="text-gray-800 py-2 dark:text-gray-300">
                  Building the foundation that supports any systems
                </p>

                <p className="py-1 text-teal-600">AWS</p>
                <p className="py-1 text-teal-600">Script</p>
                <p className="py-1 text-teal-600">Docker</p>
                <p className="py-1 text-teal-600">Terraform</p>
                <p className="py-1 text-teal-600">GitLab CI/CD</p>
              </div>
            </div>
          </section>

          {/*  Section 3  */}
          <section>
            <h3 className="text-xl py-1 mb-5 dark:text-gray-200">Projects</h3>
            {/*  Carousel Cards  */}
            <div className="flex justify-center">
              <motion.div
                className="cursor-grab overflow-hidden"
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  className="flex"
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                >
                  {/*  Project Focus Time  */}
                  <motion.div className="min-w-18 max-w-sm m-5 rounded-xl overflow-hidden shadow-lg dark:bg-gray-700">
                    <Image
                      src={focusTimer}
                      className="w-full h-60 object-cover pointer-events-none"
                      alt="focus time app description"
                    />
                    <div className="px-6 py-4">
                      <div className="flex flex-row justify-between items-center mb-2">
                        <div className="font-bold text-xl mb-2 dark:text-gray-200">
                          Focus Time
                        </div>
                        <motion.a
                          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-sm font-semibold text-white px-2 py-1 rounded-xl"
                          whileHover={{ scale: 1.2 }}
                          href="https://gitterence.github.io/focus-time/"
                          target="_blank"
                        >
                          View
                        </motion.a>
                      </div>

                      <p className="text-base text-gray-800 dark:text-gray-300">
                        A timer app that helps you to focus on task via pomodoro
                        method. React hooks like useState, useEffect,
                        useContext, etc are implemented to support count down
                        function as well as other settings.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #React
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #Javascript
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #CSS
                      </span>
                    </div>
                  </motion.div>

                  {/*  Project Portfolio  */}
                  <motion.div className="min-w-18 max-w-sm m-5 rounded-xl overflow-hidden shadow-lg dark:bg-gray-700">
                    {darkMode ? (
                      <Image
                        src={brightPortfolio}
                        className="w-full h-60 object-cover pointer-events-none"
                        alt="dark portfolio"
                      />
                    ) : (
                      <Image
                        src={darkPortfolio}
                        className="w-full h-60 object-cover pointer-events-none"
                        alt="bright portfolio"
                      />
                    )}

                    <div className="px-6 py-4">
                      <div className="flex flex-row justify-between items-center mb-2">
                        <div className="font-bold text-xl mb-2 dark:text-gray-200">
                          This Portfolio
                        </div>
                        <motion.a
                          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-sm font-semibold text-white px-2 py-1 rounded-xl"
                          whileHover={{ scale: 1.2 }}
                          href="#"
                          target="_blank"
                        >
                          View
                        </motion.a>
                      </div>

                      <p className="text-base text-gray-800 dark:text-gray-300">
                        A cool portfolio page for myself. Libraries such as
                        Tailwind and Framer Motion are utilized to build a
                        modern and visual appealing web page.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #React
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #Tailwind
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #NextJS
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #FramerMotion
                      </span>
                    </div>
                  </motion.div>

                  {/*  Project SimplyHired IP Location Matching Service  */}
                  <motion.div className="min-w-18 max-w-sm m-5 rounded-xl overflow-hidden shadow-lg dark:bg-gray-700">
                    <Image
                      src={ipLocationMatching}
                      className="w-full h-60 object-cover pointer-events-none"
                      alt="focus time app description"
                    />
                    <div className="px-6 py-4">
                      <div className="flex flex-row justify-between items-center mb-2">
                        <div className="font-bold text-xl mb-2 dark:text-gray-200">
                          SimplyHired
                        </div>
                        <motion.a
                          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-sm font-semibold text-white px-2 py-1 rounded-xl"
                          whileHover={{ scale: 1.2 }}
                          href="https://www.simplyhired.com/"
                          target="_blank"
                        >
                          View
                        </motion.a>
                      </div>
                      <p className="text-base text-gray-800 dark:text-gray-300">
                        IP-Location-Matching Service is an end-to-end feature I
                        implemented for SimplyHired.com to automatically fill
                        the user&apos;s location in the search field by
                        processing the IP address in the network request.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #Java
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #Spring Boot
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #React
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #ChakraUI
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center justify-center text-md py-1 mb-5 dark:text-gray-200"
              animate={{ x: [0, 15, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <p className="mr-3 font-mono">Swipe</p>
              {/* 👉 */}
              <BsFillArrowRightCircleFill className="text-xl" />
            </motion.div>
          </section>

          {/*  Section 4  */}
          <section>
            <div className="mt-5 pb-5">
              <h3 className="text-xl py-1 dark:text-gray-200">Lastly</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                Allow me to share a meaningful quote from Lao Tzu: &quot;
                <span className="text-teal-500">
                  A journey of a thousand miles begins with a single step
                </span>
                .&quot; While the path ahead may appear daunting and seemingly
                endless, I firmly believe that each of us possesses the
                capability to navigate it one step at a time. Let us embrace the
                notion that progress is achieved through steady momentum. As we
                navigate this path, we may encounter obstacles and
                uncertainties, but by remaining determined and focused on the
                present moment, we can overcome any challenge that comes our
                way.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                May today mark the beginning of our remarkable journey.
              </p>
            </div>
          </section>
          {/*  Section 5  */}
          <section>
            <hr class="mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex items-center justify-end text-gray-800 dark:text-gray-300">
              <AiFillCopyrightCircle className="mr-1" />
              <p className="text-sm py-1 leading-8 ">/ 2023</p>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
