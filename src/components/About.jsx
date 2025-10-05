import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-auto relative bg-black/30" id="about">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl font-bold pt-6 text-center text-white"
      >
        About Us
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mt-3"
      >
        <div className="w-[120px] h-1 bg-pink-600 rounded-full"></div>
        <div className="w-[10px] h-1 bg-pink-600 rounded-full"></div>
        <div className="w-[5px] h-1 bg-pink-600 rounded-full"></div>
      </motion.div>



      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-10 md:px-20 md:py-20 w-full">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <div className="flex items-center justify-center gap-48">
            {/* Code icon with soft spin */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="relative w-16 h-16"
            >
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-75 custom-ping"></div>
              <img
                src={assets.code}
                alt="Code icon"
                className="w-15 relative z-10"
              />
            </motion.div>

            {/* Arrow with bounce */}
            <motion.img
              src={assets.arrow}
              alt="Arrow"
              className="w-10 shadow-lg shadow-black rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Main image fade-in */}
          <motion.img
            src={assets.icon}
            alt="Icon"
            className="md:w-2/3 w-full mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full bg-gray-900 rounded-2xl flex flex-col gap-10 justify-center items-center relative p-6"
        >
          <p className="md:text-[16px] text-[12px] relative z-10 text-slate-400 leading-relaxed">
            I’m <strong className="bg-gradient-to-l from-pink-600  to-blue-700 bg-clip-text text-transparent">Kusuma Venkata Rajesh Sonti</strong>, a passionate MERN
            Stack Web Developer with experience in building responsive websites,
            e-commerce platforms, and RESTful APIs. I enjoy crafting
            user-friendly, mobile-optimized solutions using React.js, Node.js,
            Express.js, and MongoDB. My projects include full-stack e-commerce
            apps with secure authentication and dynamic carts, as well as
            SEO-friendly marketing websites. I’m always eager to learn and
            deliver high-quality digital experiences.
          </p>

          {/* CV button */}
          <motion.a
            href="/Rajesh_MernStack_.pdf"
            download="Rajesh_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded shadow-md"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Working Experience */}
      <div className="px-6 md:px-10 justify-center py-10 relative mt-[-100px] ">
        <h2 className="text-2xl font-bold text-center text-white mb-1">
          Working Experience
        </h2>
              {/* Decorative line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mb-5"
      >
        <div className="w-[150px] h-1 bg-pink-600 rounded-full"></div>
        <div className="w-[14px] h-1 bg-pink-600 rounded-full"></div>
        <div className="w-[7px] h-1 bg-pink-600 rounded-full"></div>
      </motion.div>

        <div className="flex md:flex-row flex-col gap-6">
          {/* DadThe AD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-pink-500">
              Web Developer – DadThe AD <span className="text-sm text-gray-400">(Nov 2024 – Present)</span>
            </h3>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1 text-sm md:text-base">
              <li>Hands-on experience with React.js, HTML5, CSS3, JavaScript.</li>
              <li>Built RESTful APIs using Node.js & Express.js.</li>
              <li>Worked on JWT-based authentication and SQL database operations.</li>
              <li>Exposure to real-world e-commerce platforms.</li>
              {/* <li className="italic text-slate-400">
                 (Add measurable results: e.g., “Improved site performance by X%”) 
              </li> */}
            </ul>
          </motion.div>

          {/* Freelancing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-pink-500">
              Freelance Web Developer <span className="text-sm text-gray-400">(Jan 2024)</span>
            </h3>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1 text-sm md:text-base">
              <li>Deployed 3+ responsive websites with HTML, CSS, JavaScript, and WordPress.</li>
              <li>Showcased adaptability and initiative in handling client requirements.</li>
              <li>List key clients or project types (business sites, portfolios, etc.).</li>
              <li>Provide live project links for recruiters to explore.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
