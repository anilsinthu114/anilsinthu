import { motion } from 'framer-motion';
import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaChevronRight, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import experiences from '../data/experiences.json';

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    key={index}
    className="mb-8 md:mb-16 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl p-6 md:p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
      <div className="bg-blue-100 p-3 rounded-full mr-4 mb-4 md:mb-0">
        <FaBriefcase className="text-3xl md:text-4xl text-blue-600" />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{exp.title}</h2>
        <h3 className="text-xl md:text-2xl text-blue-600">{exp.company || exp.college}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <p className="text-sm md:text-base">{exp.location}</p>
        </div>
      </div>
    </div>
    <div className="flex items-center mb-6 text-gray-600">
      <FaCalendarAlt className="mr-2 text-blue-500" />
      <p className="text-sm md:text-lg">{exp.period}</p>
    </div>
    <p className="text-gray-700 mb-8 text-base md:text-xl leading-relaxed">{exp.description}</p>
    <div className="bg-blue-50 p-6 md:p-8 rounded-xl">
      <h4 className="text-xl md:text-2xl font-bold mb-6 flex items-center text-blue-700">
        <FaTrophy className="mr-3" />
        Key Achievements
      </h4>
      <ul className="space-y-4">
        {exp.achievements.map((achievement, i) => (
          <motion.li
            key={i}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <FaChevronRight className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
            <span className="text-gray-700 text-sm md:text-lg">{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 md:mb-16 text-center text-gray-800 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
            {/* <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            /> */}
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
