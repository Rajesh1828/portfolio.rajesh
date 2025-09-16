import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-screen w-full" id="home">
            {/* Background image */}
            <img
                src={assets.hero}
                alt="Hero background"
                className="absolute  md:block inset-0 w-full h-full object-cover"
            />

            {/* Mobile version */}
   <img
                src={assets.mobile}
                alt="Hero background"
                className="absolute  md:hidden inset-0 w-full h-full object-cover"
                            />


            {/* Optional overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full  px-4">
                <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl md:left-40 relative   font-bold text-pink-600">
                    Welcome to My Designing <span className="text-pink-700">Era</span>
                </motion.p>

                <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-black mt-4 relative md:left-40">
                    Hi, I am Kusuma Venkata Rajesh Sonti
                </motion.h1>

                <motion.p 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm md:text-lg font-medium text-gray-500 mt-2 max-w-xl relative md:left-30">
                    Building scalable web apps with clean, modern design
                </motion.p>
                <div className="flex items-center gap-2 text-gray-800 font-extrabold text-sm md:text-lg ml-20 mt-2 max-w-2xl">
                    <span className="text-pink-600 text-4xl">I am</span>

                    <div className="relative h-7  overflow-hidden">
                        <div className="animate-slide space-y-1">
                            <p>MERN Stack Developer</p>
                            <p>UI/UX Designer</p>
                            <p>Frontend Developer</p>
                            <p>Backend Developer</p>
                            <p>Content Creator</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
