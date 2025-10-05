import React from "react";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiRender,
  SiGit,
  SiHtml5,
  SiHostinger,
  SiJavascript,
  SiCss3,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-gray-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-500" },
    { icon: SiReact, name: "React", color: "text-blue-500" },
    { icon: SiNetlify, name: "Netlify", color: "text-pink-500" },
    { icon: SiVercel, name: "Vercel", color: "text-black" },
    { icon: SiRender, name: "Render", color: "text-gray-500" },
    { icon: SiHostinger, name: "Hostinger", color: "text-gray-500" },
  ];

  return (
    <div className="w-full mx-auto h-auto mb-2" id="skills">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl  font-bold pt-5 text-center text-white"
      >
        Skills & Technologies
      </motion.h2>

      {/* Decorative Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mt-1 mb-4"
      >
        <div className="w-[120px] h-1 bg-pink-600 rounded-full"></div>
        <div className="w-[10px] h-1 bg-pink-600 rounded-full"></div>
        <div className="w-[5px] h-1 bg-pink-600 rounded-full"></div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-2  md:grid-cols-8 gap-6 px-5 md:px-24 md:py-12"
      >
        {skills.map(({ icon: Icon, name, color }, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-white bg-gray-800 shadow-md rounded-md p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-28 h-28 flex items-center justify-center">
              <Icon size={50} className={color} aria-label={name} title={name} />
            </div>
            <span className="text-sm font-medium ">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
