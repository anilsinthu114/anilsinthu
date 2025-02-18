import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/anilsinthu114', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/anilsinthu', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:anilsinthu114@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {href: '/blog', label: 'Blog'},
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 text-white py-6"
    >
      <div className="container mx-auto px-4">
        <nav className="flex flex-row flex-wrap justify-center gap-4 mb-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-blue-400 transition-colors duration-200 text-xs md:text-base">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center space-x-3 mb-7">
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

        <p className="text-center text-sm text-gray-300 mb-3 px-4">
          Made with <FaHeart className="inline-block text-red-500" /> using Next.js by Anil Sinthu
        </p>
        
        <div className="text-center text-sm text-gray-200 mb-3 px-4">
          &copy; {currentYear} Anil Sinthu. All rights reserved.
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 px-4">
        Website designed and developed by Anil Sinthu and deployed on Vercel
      </div>
    </motion.footer>
  );
};

export default Footer;