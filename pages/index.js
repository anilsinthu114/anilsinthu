import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import descriptions from '../data/descriptions.json';
import roles from '../data/roles.json';
import profilePic from '../public/images/sa.jpg';

const profiles = [
  { icon: FaGithub, url: 'https://github.com/anilsinthu114', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/anilsinthu', label: 'LinkedIn' },
  { icon: FaCode, url: 'https://leetcode.com/u/anilsinthu', label: 'LeetCode' },
  { icon: FaEnvelope, url: 'mailto:anilsinthu114@gmail.com', label: 'Email' },
];

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [displayedDescription, setDisplayedDescription] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLaunchDay, setIsLaunchDay] = useState(false);
  
  const { scrollY } = useScroll();

  // Scroll-based animations
  const imageScale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const imageY = useTransform(scrollY, [0, 300], [0, 30]);
  const contentY = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const containerPadding = useTransform(scrollY, [0, 300], [24, 16]);
  const blurStrength = useTransform(scrollY, [0, 300], [0, 5]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.8, 0.6]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const socialScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    if (!roles || roles.length === 0) return; // Ensure roles are available

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenRoles = 1000;

    const currentRole = roles[currentRoleIndex] || ''; // Ensure role exists
    const currentDesc = descriptions[currentRoleIndex % descriptions.length] || '';

    if (!isDeleting && displayedRole === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
      return;
    }

    if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedRole((prevRole) =>
        isDeleting ? prevRole.slice(0, -1) : currentRole.slice(0, prevRole.length + 1)
      );
      setDisplayedDescription(currentDesc);
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, currentRoleIndex, isDeleting]);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date('2024-10-28');
    
    if (currentDate.toDateString() === targetDate.toDateString()) {
      setIsLaunchDay(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden" id='home'>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"
          style={{ opacity: backgroundOpacity }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ opacity, filter: `blur(${blurStrength}px)` }}
        />
        <motion.div 
          className="container mx-auto text-center z-10"
          style={{ padding: containerPadding }}
        >
          <motion.div
            className="relative"
            style={{ scale: imageScale, y: imageY }}
          >
            <Image
              src={profilePic}
              alt="Profile Picture" 
              width={200}
              height={200}
              className="rounded-full mx-auto shadow-xl transition-all duration-500 hover:scale-110"
              priority
            />
          </motion.div>
          {isLaunchDay && (
            <motion.div
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 120 }}
            >
              Launched Today! On occasion of My Birthday
            </motion.div>
          )}
          <motion.div style={{ y: contentY }}>
            <motion.h1
              className="text-5xl font-bold mt-6 text-gray-800"
              style={{ scale: titleScale }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
            >
              Hi, I'm Anil Sinthu
            </motion.h1>
            <motion.div
              className="mt-4 flex flex-col items-center space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ scale: titleScale }}
            >
              <p className="text-lg text-gray-600">
                {displayedRole}
                <span className="animate-blink">|</span>
              </p>
              <p className="text-sm text-gray-500">
                {displayedDescription}
              </p>
            </motion.div>
            <motion.div
              className="mt-8 flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 120 }}
              style={{ scale: socialScale }}
            >
              {profiles.map(({ icon: Icon, url, label }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={28} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
