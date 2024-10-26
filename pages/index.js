import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import profilePic from '../public/images/profile_sa.jpg';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Software Developer',
    'Cybersecurity Enthusiast',
    'Frontend Developer',
    'Backend Developer',
    'Open Source Contributor',
    'Competitive Programmer',
  ];

  const profiles = [
    { icon: FaGithub, url: 'https://github.com/anilsinthu114', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/anilsinthu', label: 'LinkedIn' },
    { icon: FaCode, url: 'https://leetcode.com/u/anilsinthu', label: 'LeetCode' },
    { icon: FaEnvelope, url: 'mailto:anilsinthu114@gmail.com', label: 'Email' },
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenRoles = 1000;

    if (!isDeleting && displayedRole === roles[currentRoleIndex]) {
      setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
    } else if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedRole(prevRole => 
          isDeleting 
            ? prevRole.slice(0, -1)
            : roles[currentRoleIndex].slice(0, prevRole.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [displayedRole, currentRoleIndex, isDeleting, roles]);

  return (
    <>
      <Navbar />
      <main className="relative container mx-auto px-4 py-16 text-center bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-lg border-4 border-blue-500"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mt-6 text-gray-800 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi, I'm Anil Sinthu
        </motion.h1>
        <motion.div
          className="mt-4 h-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-lg text-gray-600">
            {displayedRole}
            <span className="animate-blink">|</span>
          </p>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center space-x-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <profile.icon size={28} />
              <span className="sr-only">{profile.label}</span>
            </motion.a>
          ))}
        </motion.div>
        <motion.a
          href="https://drive.google.com/file/d/1r4K2DK1bDaR6IprPABP1L0lP5Deo5l_8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-3 px-6 rounded-full mt-8 inline-block font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-md z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </main>
      <Footer />
    </>
  );
}
