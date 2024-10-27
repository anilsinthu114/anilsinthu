import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Let's Work Together
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm actively seeking new opportunities to create amazing things. Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h2>
              <div className="space-y-6">
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:' + ['anilsinthu114', 'gmail.com'].join('@');
                  }}
                  className="flex items-center space-x-4 text-gray-600 hover:text-blue-500 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FaEnvelope size={24} />
                  </div>
                  <span className="text-lg">Email Me</span>
                </motion.a>
                
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://linkedin.com/in/anilsinthu', '_blank');
                  }}
                  className="flex items-center space-x-4 text-gray-600 hover:text-blue-500 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FaLinkedin size={24} />
                  </div>
                  <span className="text-lg">Connect on LinkedIn</span>
                </motion.a>

                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/anilsinthu114', '_blank');
                  }}
                  className="flex items-center space-x-4 text-gray-600 hover:text-blue-500 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FaGithub size={24} />
                  </div>
                  <span className="text-lg">View GitHub Projects</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
