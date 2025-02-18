import { motion } from 'framer-motion';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import skillData from '../data/skills.json';

// Import all necessary icons
import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import { SiC, SiCplusplus, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';

// Map skill names from JSON to actual React icons
const iconMap = {
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase,
  FaLinux, FaDocker, FaAws, SiCplusplus, SiMysql, SiMongodb, SiPostgresql, SiC
};

// Function to determine proficiency level
const getProficiencyLevel = (level) => {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Intermediate';
  if (level >= 60) return 'Proficient';
  return 'Beginner';
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>

        {/* Iterate over skill categories */}
        {skillData.skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Iterate over skills in the category */}
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = iconMap[skill.icon] || FaJava; // Default to FaJava if icon is undefined
                
                return (
                  <motion.div 
                    key={skillIndex} 
                    className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="mr-3 text-3xl text-blue-600" />
                      <span className="font-medium text-xl text-gray-800">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <motion.div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {getProficiencyLevel(skill.level)} ({skill.level}%)
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
