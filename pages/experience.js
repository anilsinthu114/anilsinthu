import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaTrophy, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

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
  const experiences = [
    {
      title: 'Backend Developer (Voluntary)',
      company: 'JNTU-GV University',
      location: 'Vizianagaram, Andhra Pradesh',
      period: '2023-Present',
      description: 'Developed and maintained back-end services for various projects, including e-commerce and internal tools.',
      achievements: [
        'Developed a new module to upload and manage bulk images for the university Events and News and Gallery pages',
        'Enhanced the existing modules with new features and improved the performance',
        'Encrypted the sensitive data of the university',
        'Developing a OAUTH2.0 Authentication system for the university Admin website',
        'Fixed the bugs in the existing modules'
      ]
    },
    {
      title: 'Cyber Security Intern',
      company: 'SkillDzire with Collaboration with APSCHE',
      location: 'Remote',
      period: 'May 2024 - July 2024',
      description: 'A Mandatory Internship of 2 months for the students of Information Technology in JNTU-GV University.',
      achievements: [
        'Learned about the basics of Cyber Security and Cyber Forensics',
        'Learned about the basics of Cloud Computing and Cyber Attacks',
        'Learned about the basics of Cyber Security Tools and Cyber Forensics Tools',
        'Learned about the basics of Cyber Security Laws and Cyber Security Ethics',
        'Learned about the basics of Cyber Security Management and Cyber Security Policies',
      ]
    },
    {
      title: 'Research Intern',
      college: 'National Institute of Technology, Warangal',
      location: 'Warangal, Telangana',
      period: 'May 2024 - July 2024',
      description: 'Conducted research on Detection of Covid-19, Tuberculosis and Pneumonia using X-ray images.',
      achievements: [
        'Learned about the basics of Machine Learning and Deep Learning',
        'Learned about the basics of Computer Vision and Image Processing',
        'Learned about the basics of Deep Learning Models and their architectures',
        'Trained the models on the dataset and tested the models',
        'Achieved an accuracy of 91% in the detection of Covid-19, Tuberculosis and Pneumonia using X-ray images'
      ]
    },
    {
      title: 'Software Test Automation Intern',
      company: 'SmartInternz',
      location: 'Remote',
      period: 'December 2023 - January 2024',
      description: 'An Internship of 1 month to learn about the basics of Software Test Automation and how to use Katalon Studio to automate the testing of web applications.',
      achievements: [
        'Learned about the basics of Software Automation Testing and how to use Katalon Studio to automate the testing of web applications',
        'Gained hands-on experience in creating and executing automated test scripts',
        'Developed skills in identifying and reporting software defects',
        'Collaborated with team members to improve test coverage and efficiency'
      ]
    }
  ];

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
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
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
