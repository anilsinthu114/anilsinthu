import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/Projectcard';
import { FaGithub, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: 'WhatsApp Automation for Payment Receipts',
            description: 'Developed a Python-based system that automates the process of sending payment receipts via WhatsApp. This project streamlines business operations by reducing manual effort and improving customer communication.',
            techStack: ['Python', 'Flask', 'Twilio API'],
            link: 'https://github.com/anilsinthu114/whatsapp-automation',
            icon: <FaGithub />,
            status: 'In Progress',
            // liveLink: 'https://whatsapp-automation-demo.herokuapp.com'
        },
        {
            title: 'Bulk Image Upload API',
            description: 'Created a robust Node.js Express API for efficient management of bulk image uploads. This project significantly improved data handling capabilities for a client\'s e-commerce platform.',
            techStack: ['Node.js', 'Express', 'MySQL', 'React'],
            link: 'private',
            icon: <FaLock />,
            status: 'Completed'
        },
        {
            title: 'PhD Registration System',
            description: 'Engineered a comprehensive system for managing PhD scholar data, featuring dynamic form handling and secure file uploads. This project enhanced the efficiency of the university\'s registration process.',
            techStack: ['Node.js', 'Express', 'MySQL', 'React'],
            link: 'private',
            icon: <FaLock />,
            status: 'Completed'
        },
        {
            title: 'Portfolio Website',
            description: 'Designed and developed a personal portfolio website using Next.js and Tailwind CSS. This project showcases my skills and projects in an interactive and responsive manner.',
            techStack: ['Next.js', 'Tailwind CSS'],
            link: 'https://github.com/anilsinthu114/anilsinthu',
            icon: <FaGithub />,
            status: 'Completed',
            liveLink: 'https://anilsinthu.vercel.app'
        },
        {
            title: 'Smart Traffic Management System',
            description: 'Implemented an intelligent system for urban traffic management using Python and Flask. This project aims to optimize traffic flow and reduce congestion in smart cities.',
            techStack: ['Python', 'Flask', 'MySQL'],
            link: 'https://github.com/anilsinthu114/smart-traffic-management-system',
            icon: <FaGithub />,
            status: 'Ongoing',
            // liveLink: 'https://smart-traffic-demo.herokuapp.com'
        },
        {
            title: 'Real-Time Traffic Management System',
            description: 'Developed an advanced system for real-time traffic management utilizing machine learning algorithms and weather data. This project provides accurate traffic predictions and suggestions for route optimization.',
            techStack: ['Python', 'Random Forest', 'Gradient Boosting', 'KNN', 'SVM', 'OpenWeatherMap API'],
            link: 'https://github.com/anilsinthu114/real_time_traffic_mangement',
            icon: <FaGithub />,
            status: 'Completed',
            // liveLink: 'https://real-time-traffic.herokuapp.com'
        },
        {
            title: 'Bible Verse Generator',
            description: 'Created an interactive website that generates random Bible verses. This project serves as a daily inspiration tool for users seeking spiritual guidance.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
            link: 'https://github.com/anilsinthu114/biblequotegenerator',
            icon: <FaGithub />,
            status: 'Completed',
            liveLink: 'https://getbibleverse.vercel.app'
        },
        {
            title: 'Detection of Covid-19 using Chest X-Ray Images',
            description: 'Developed a deep learning model to detect Covid-19 from chest X-ray images. This project contributes to faster and more accurate diagnosis of Covid-19 cases.',
            techStack: ['Python', 'CNN', 'Keras', 'TensorFlow', 'OpenCV', 'Deep Learning', 'Machine Learning', 'DenseNet121'],
            link: 'https://github.com/anilsinthu114/DetCovid19',
            icon: <FaGithub />,
            status: 'Completed',
            // liveLink: 'https://covid19-xray-detection.herokuapp.com'
        },
        {
            title: 'Service Request Management System',
            description: 'Engineered a comprehensive system for managing service requests using Java and MySQL. This project improves customer service efficiency and request tracking for businesses.',
            techStack: ['Java', 'MySQL', 'Eclipse IDE', 'Java Servlet', 'JSP', 'JSTL', 'JDBC'],
            link: 'https://github.com/anilsinthu114/service-management-system',
            icon: <FaGithub />,
            status: 'Completed',
            // liveLink: 'https://service-request-demo.herokuapp.com'
        }
    ];

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
