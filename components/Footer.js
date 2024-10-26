import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/anilsinthu114', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/anilsinthu', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:anilsinthu114@gmail.com', label: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 text-white py-6"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-3">
          {socialLinks.map(({ icon: Icon, url, label }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <Icon size={24} />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </div>
        <p className="text-center text-sm text-gray-300 mb-2">
          Made with <FaHeart className="inline-block text-red-500" /> by Anil Sinthu
        </p>
        <div className="text-xs text-gray-400">
          &copy; {currentYear} Anil Sinthu. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;