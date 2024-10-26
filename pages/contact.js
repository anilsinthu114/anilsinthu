import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-100 to-white min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8 md:p-12"
        >
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">Hire Me</h1>
          <p className="mt-2 text-xl text-gray-600 text-center mb-8">
            I'm available for exciting opportunities! If you're interested in my skills and experience, let's connect.
          </p>
          <div className="flex flex-col items-center space-y-6 mb-12">
            <p className="text-xl text-gray-700 text-center">Reach out to me:</p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="mailto:anilsinthu114@gmail.com"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                <FaEnvelope size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://linkedin.com/in/anilsinthu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/anilsinthu114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                <FaGithub size={32} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
