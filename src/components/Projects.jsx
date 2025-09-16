import React from "react";
import { assets } from "../assets/assets";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce App",
      description: "Full-stack MERN app with cart & JWT auth",
      img: assets.ecom,
      demo: "https://tomato-frontend-lxo3.onrender.com",
      github: "https://github.com/Rajesh1828/tomato.git",
    },
    {
      id: 2,
      title: "digital Marketing",
      description: "Responsive interface with and seo friendly built with HTML, CSS & JS",
      img: assets.pradeep,
      demo: "https://pradeep.media/",
      github: "https://github.com/Rajesh1828/pradeep.media.git",
    },
    {
      id: 3,
      title: "Marketing Site",
      description: "SEO-friendly website built with React & Tailwind CSS",
      img: assets.dad,
      demo: "https://dadthead.com",
      github: "https://github.com/dadthead/Dadthead.git",
    },
    {
      id: 4,
      title: "Diagnostic App",
      description: "React +tailwind +Nodejs  Diagnostic App",
      img: assets.diagno,
      demo: "https://global-diagnostic.vercel.app/",
      github: "https://github.com/Rajesh1828/global-diagnostic.git",
    },
    {
      id: 5,
      title: "Education App",
      description: "Education app with Wordpress integration Login Portal",
      img: assets.aefl,
      demo: "https://aefl.co.in/",
      github: "#",
    },
    {
      id: 6,
      title: "RealState App",
      description: "Real estate app with React + Tailwind CSS+ web3 integration",
      img: assets.estate,
      demo: "https://estate-cp8m.onrender.com/",
      github: "https://github.com/Rajesh1828/estate.git",
    },
    {
      id: 7,
      title: "Hitech stionary App",
      description: "build with Mern stack application with admin panel and jwt authentication",
      img: assets.hitech,
      demo: "https://hsl-files.vercel.app/",
      github: "https://github.com/Rajesh1828/hslFiles.git",
    },
    {
      id: 8,
      title: "Bl NutriFood App",
      description: "Builded with Raect js and Tailwind css Motion and Animation",
      img: assets.bl,
      demo: "https://blnutrifoods.onrender.com",
      github: "https://github.com/Rajesh1828/hslFiles.git",
    },
    {
      id: 9,
      title: "Semi-Ecommerce App",
      description: "Builded with Html, Css & Js and Node.js backend showcase cart and whishlist",
      img: assets.japali,
      demo: "https://earnest-smakager-9f784c.netlify.app/",
      github: "https://github.com/Rajesh1828/japalidemo",
    },
    {
      id: 10,
      title: "realState App",
      description: "Builded with  React js and Tailwind css",
      img: assets.dlp,
      demo: "https://dreamlandprojects.in/",
      github: "https://github.com/dadthead/Dream-Land.git",
    },


  ];

  return (
    <div className="w-full h-auto  bg-black/30 md:px-10 md:py-10" id="projects">
      <h2 className="text-4xl font-bold text-center text-white">Projects</h2>

      <div className="flex items-center justify-center gap-2 mt-3">
        <div className="w-[100px] rounded-4xl h-1 bg-pink-600"></div>
        <div className="w-[10px] rounded-4xl h-1 bg-pink-600"></div>
        <div className="w-[5px] h-1 rounded-full bg-pink-600"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-10 mt-8 ">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white/20 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold mb-2 text-amber-50">{project.title}</h3>
              <p className="text-pink-100 text-sm font-stretch-75%">{project.description}</p>
              <div className="mt-2 flex justify-between">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-bold hover:underline"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default Projects;
