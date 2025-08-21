import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import img from "../../images/front-end-web-development-tools.jpg";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-20 px-4 py-12 text-white border border-l-0 border-r-0 bg-neutral-950 md:flex-row md:px-20 border-t-gray-800 border-white/5 "
      style={{
        backgroundColor: "#000",
        backgroundImage: `
        linear-gradient(#050505  1px, transparent 1px),
        linear-gradient(90deg, #050505 1px, transparent 1px)
      `,
        backgroundSize: "12px 12px",
        backgroundPosition: "center",
      }}
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-gray-200"
        >
          More about{" "}
          <span className="italic font-light text-gray-400 tracking-[-0.14em]">
            Me
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-6 text-xs leading-relaxed max-w-96 text-white/60 md:text-sm"
        >
          Hello! I’m a Computer Engineering student and Frontend Developer
          specialized in building modern and responsive web applications using
          React and Tailwind CSS. I have a strong focus on creating clean,
          user-friendly designs and scalable frontend architectures. I’m always
          eager to learn new technologies and turn creative ideas into
          real-world solutions. 🚀
        </motion.p>
        <a href="#contact">
          <button className="flex items-center gap-2 px-4 py-2 mt-6 text-xs transition border rounded-full text-white/60 border-neutral-700 bg-neutral-900 hover:text-white">
            <FaArrowRight className="transform -rotate-45" />
            Contact Me
          </button>
        </a>
      </div>

      <div className="w-[350px] md:w-[400px] rounded-xl overflow-hidden shadow-[0_20px_50px_#ffffff30]">
        <img
          src={img}
          alt="designer at work"
          className="rounded-xl w-full object-cover h-[200px] md:h-[250px] grayscale transition-transform duration-100 ease-in-out hover:scale-105 hover:brightness-75"
        />
      </div>
    </section>
  );
}
