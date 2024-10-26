import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Welcome to My Portfolio",
    "Crafting Digital Solutions",
    "Turning Ideas into Code",
    "Building the Future, One Line at a Time"
  ];

  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const descriptions = [
    "Passionate Software Developer | Problem Solver | Tech Enthusiast",
    "Full Stack Developer | UI/UX Enthusiast | Continuous Learner",
    "Code Architect | Performance Optimizer | Innovation Driver",
    "Open Source Contributor | Agile Practitioner | Team Player"
  ];

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    const descriptionInterval = setInterval(() => {
      setDescriptionIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 5000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(descriptionInterval);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <FaCode className="text-6xl mx-auto mb-4" />
          <motion.h1 
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 h-20"
          >
            {titles[titleIndex]}
          </motion.h1>
          <motion.p 
            key={descriptionIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl mb-8 h-16"
          >
            {descriptions[descriptionIndex]}
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-white text-blue-800 py-2 px-6 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

