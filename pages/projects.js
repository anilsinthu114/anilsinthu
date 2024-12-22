import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLock } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

export default function Projects() {
    const projects = projectsData;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                <div className="container mx-auto px-4 py-16">
                    <motion.h1 
                        className="text-5xl font-bold text-center mb-12 text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Projects
                    </motion.h1>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard 
                                    {...project} 
                                    className="bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
