import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    "Frontend",
    "Landing Pages",
    "Static Pages",
    "E-commerce sites",
    "Backend",
    "Fullstack",
    "UI/UX",
    "UserFriendly",
    "Responsive",
  ];

  return (
    <div className="w-full h-auto bg-black/30" id="services">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl font-bold pt-5 text-center text-white"
      >
        Services
      </motion.h2>

      {/* Divider line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2"
      >
        <div className="w-[100px] h-1 bg-pink-600 rounded-4xl"></div>
        <div className="w-[10px] h-1 bg-pink-600 rounded-4xl"></div>
        <div className="w-[5px] h-1 bg-pink-600 rounded-full"></div>
      </motion.div>

      {/* Services grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-10 md:px-10"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="md:w-52 h-12 md:h-16 w-32 text-sm flex items-center justify-center border-b-2 border-pink-200 shadow-2xl shadow-pink-100 rounded-full text-white font-bold hover:border-pink-600 hover:border-2 transition duration-300"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
