import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    assets.html,
    assets.css,
    assets.js,
    assets.react,
    assets.nodejs,
    assets.expressjs,
    assets.mongodb,
    assets.tailwindcss,
    assets.sql,
    assets.git,
    assets.github,
    assets.framer,
    assets.hostinger,
    assets.vercel,
    assets.netlify,
    assets.render,
  ];

  return (
    <div className="w-full h-auto bg-black/30" id="skills">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold pt-5 text-center text-white"
      >
        Skills & Technologies
      </motion.h2>

      {/* Decorative Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2"
      >
        <div className="w-[120px] h-1 bg-pink-600 rounded-4xl"></div>
        <div className="w-[10px] h-1 bg-pink-600 rounded-4xl"></div>
        <div className="w-[5px] h-1 bg-pink-600 rounded-full"></div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-6 gap-6 px-4 py-10 md:px-10 md:py-12 place-items-center"
      >
        {skills.map((src, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.5)" }}
            className="flex items-center justify-center"
          >
            <img src={src} alt={`Skill ${index}`} className="w-20 h-20 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
