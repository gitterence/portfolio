import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-portfolio-light px-5 text-zinc-900 sm:px-8 md:px-16 lg:px-20 dark:bg-portfolio-dark dark:text-zinc-100 transition-colors duration-300">
        <div className="m-auto max-w-screen-lg">
          <Navbar />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Quote />
          <Footer />
        </div>
      </main>
    </div>
  );
}
