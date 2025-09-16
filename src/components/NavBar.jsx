import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll =()=>{
    if(window.scrollY > 50){
        setScrolled(true);
    }else{
        setScrolled(false);
    };
  

  }

  useEffect(()=>{
   window.addEventListener("scroll",handleScroll);
    return()=>{
        window.removeEventListener("scroll",handleScroll);
    }

  },[]);
  

  return (
    <nav className={` fixed w-full z-50 transition-colors duration-500 ease-in-out ${scrolled ? "bg-black/80 shadow-md" : "bg-black/0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white logo">SKV.RAJESH</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-pink-600 font-bold hover:text-pink-700">
              Home
            </a>
            <a href="#about" className="text-pink-600 font-bold hover:text-pink-700">
              About
            </a>
            <a href="#services" className="text-pink-600 font-bold hover:text-pink-700">
              Services
            </a>
            <a href="#skills" className="text-pink-600 font-bold hover:text-pink-700">
              Skills
            </a>
            <a href="#contact" className="text-pink-600 font-bold hover:text-pink-700">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
       
        <div className={`md:hidden bg-white/20 shadow-md overflow-hidden transition-all duration-700 ease-in-out  ${isOpen?"max-h-60 opacity-100":"max-h-0 opacity-0"}`}>

          <div className="flex flex-col space-y-2 p-4">
            <a href="#home" className="text-pink-700 hover:text-pink-600 font-medium">
              Home
            </a>
            <a href="#about" className="text-pink-700 hover:text-pink-600 font-medium">
              About
            </a>
            <a href="#services" className="text-pink-700 hover:text-pink-600 font-medium">
              Services
            </a>
            <a href="#skills" className="text-pink-700 hover:text-pink-600 font-medium">
              Skills
            </a>
            <a href="#contact" className="text-pink-700 hover:text-pink-600 font-medium">
              Contact
            </a>

          </div>

        </div>
      
    </nav>
  );
};

export default Navbar;
