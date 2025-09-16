import React from "react";
import { assets } from "../assets/assets";
import { Instagram,Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-black/30 w-full h-auto relative"  id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      className="text-4xl font-bold text-center text-white pt-5">
        Contact Me
      </motion.h2>

      {/* Decorative Line */}
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-2 mt-3">
        <div className="w-[130px] h-1 bg-pink-600 rounded-4xl"></div>
        <div className="w-[10px] h-1 bg-pink-600 rounded-4xl"></div>
        <div className="w-[5px] h-1 bg-pink-600 rounded-full"></div>
      </motion.div>

      {/* Contact Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-40 md:py-16 ">
        {/* Contact Info */}

        <motion.div
        initial={{ opacity: 0 , x: -100}}
        whileInView={{ opacity: 1 , x: 0}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 w-full md:w-1/2 text-white">
          <p>
            <b>Email:</b> sonti8747@gmail.com
          </p>
          <p>
            <b>Phone:</b> +91 8179575173
          </p>
          <p>
            <b>Address:</b> Repalle, Andhra Pradesh
          </p>
          <p>Adavuladeevi, 522262</p>
                                      <div className="absolute  rounded-full w-20 h-20 bg-pink-500  custom-ping"></div>


          {/* Social Links */}
          <div className="flex gap-5 mt-4">
            <a
              href="https://github.com/Rajesh1828"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-pink-600 rounded-full text-white shadow-2xs shadow-pink-300 hover:bg-pink-600 hover:text-white transition"
            >
                <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh1828/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-pink-600 rounded-full text-white shadow-2xs shadow-pink-300 hover:bg-pink-600 hover:text-white transition"
            >
                <Linkedin className="stroke-2" />
            </a>
        
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
            initial={{ opacity: 0 , x: 100}}
        whileInView={{ opacity: 1 , x: 0}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex items-center justify-center">
        <div className="absolute right-80 top-48  rounded-full w-20 h-20 bg-pink-500  custom-ping"></div>

          <img
            src={assets.phone}
            className="w-[70%] max-w-[500px] drop-shadow-lg"
            alt="Phone illustration"
          />

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
