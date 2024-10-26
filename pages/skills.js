import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaDocker, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiPostgresql, SiC } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: FaJava },
        { name: 'Python', level: 75, icon: FaPython },
        { name: 'JavaScript', level: 80, icon: FaJs },
        { name: 'C', level: 90, icon: SiC },
      ],
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'React', level: 75, icon: FaReact },
        { name: 'Node.js', level: 80, icon: FaNodeJs },
        { name: 'HTML5', level: 75, icon: FaHtml5 },
        { name: 'CSS3', level: 75, icon: FaCss3Alt },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', level: 85, icon: SiMysql },
        { name: 'MongoDB', level: 65, icon: SiMongodb },
        { name: 'PostgreSQL', level: 70, icon: SiPostgresql },
      ],
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, icon: FaGitAlt },
        { name: 'Linux', level: 80, icon: FaLinux },
        { name: 'Docker', level: 55, icon: FaDocker },
        { name: 'AWS', level: 55, icon: FaAws },
      ],
    },
  ];

  const getProficiencyLevel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    if (level >= 60) return 'Proficient';
    return 'Beginner';
  };

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
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="mr-3 text-3xl text-blue-600" />
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
              ))}
            </div>
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
