import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Ahmed from "../../images/+20 127 370 2465 20230418_233013.jpg";
import cv from "../../pdfs/Ahmed_Mohamed_CV.pdf";
import { motion } from "framer-motion";
import { IoArrowDownOutline, IoMailUnread } from "react-icons/io5";
import Video from "../../../public/riverside-at-night-love-money-rocknroll-moewalls-com.mp4";
import { useEffect, useState } from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import FaqSection from "../../components/FaqQuestion";

import CubeComponent from "../../components/CubeComponent";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";

export default function Home() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const sections = ["about", "projects", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  // 🔹 متابعة الـ scroll لتحديد السكشن الحالي
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="relative bg-black h-screen">
          <video
            className="absolute inset-0 z-30 object-cover w-full h-full pointer-events-none"
            src={Video}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 z-30 bg-black/25"></div>
          <div className="fixed fixed-top z-50 flex items-center justify-between w-full py-2 border-b bg-neutral-950 border-neutral-800">
            <div className="grid items-center w-full grid-cols-12 px-5 md:px-20">
              <h1 className="col-span-6 text-lg text-white md:col-span-4 md:text-2xl">
                My Portfolio
              </h1>

              {/* Desktop Menu */}
              <div className="items-center hidden col-span-8 gap-6 text-lg md:flex md:text-2xl ms-auto">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`transition-colors duration-200 ${
                      active === section
                        ? "text-white font-semibold border-b-2 border-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              {/* Mobile Toggle */}
              <div className="flex justify-end col-span-6 md:hidden">
                <button
                  onClick={() => setOpen(!open)}
                  className={`text-2xl text-white transition-transform duration-300 ${
                    open ? "rotate-90" : ""
                  }`}
                  aria-label="Toggle menu"
                >
                  ☰
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute w-full text-center text-white top-12 md:hidden bg-neutral-900 transform transition-all duration-300 ease-in-out
                ${
                  open
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-75 pointer-events-none"
                }`}
              style={{ origin: "top" }}
            >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setOpen(false);
                  }}
                  className={`block w-full py-2 transition-colors duration-200 ${
                    active === section
                      ? "bg-neutral-800 font-semibold"
                      : "hover:bg-neutral-800"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Hero */}
          <div
            id="hero"
            className="relative z-40 flex flex-col items-center justify-center pt-20 pb-32"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={Ahmed}
              alt="profile"
              className="object-cover rounded-full shadow-md w-28 h-28 shadow-white"
            />
            <motion.p
              className="text-white/70 text-[9px] mt-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <motion.span
                className="text-green-600 text-[20px] trasnform"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ●
              </motion.span>
              <span className="text-2xl text-gray-50 ">available for work</span>
            </motion.p>
            <motion.h1
              className="mt-2 text-3xl font-medium text-white md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Ahmed{" "}
              <span className="italic font-light text-gray-300 tracking-[-0.14em]">
                Mohamed
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="mt-2 text-xl text-gray-300"
            >
              Frontend Developer.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex items-center mt-4 text-xl text-gray-50 gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              <a href="https://github.com/ahmed12757">
                <FaGithub className="cursor-pointer hover:text-white" />
              </a>
              <span className="text-gray-400/50">|</span>
              <a href="https://www.linkedin.com/in/ahmed-mohammed-775445224/">
                <FaLinkedin className="cursor-pointer hover:text-white" />
              </a>
              <span className="text-gray-400/50">|</span>
              <a href="mailto:ah8962083@gmail.com">
                <IoMailUnread className="cursor-pointer hover:text-white" />
              </a>
            </motion.div>

            {/* Contact Button */}
            <a href={cv}>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="flex justify-center items-center mt-6 p-3 bg-black text-white text-xl 
                  rounded-full font-light gap-1 border-[.5px] border-gray-900 shadow-sm shadow-white"
              >
                Download CV{" "}
                <IoArrowDownOutline className="font-bold transform " />
              </motion.button>
            </a>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IoIosArrowDown className="mt-10 text-xl text-white" />
            </motion.div>
          </div>
        </div>

        {/* Sections */}
        <section id="about">
          <About />
          <CubeComponent />
          <FaqSection />
        </section>

        <section id="projects">
          <Projects />
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <div>
          <BackToTop />
          <Footer />
        </div>
      </div>
    </>
  );
}
