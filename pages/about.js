import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCloud, FaDatabase, FaGitAlt, FaGraduationCap, FaHtml5, FaJava, FaJs, FaLaptopCode, FaNodeJs, FaPython, FaReact, FaUserGraduate } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import data from '../data/aboutData.json';

const iconMap = {
    FaCloud, FaDatabase, FaGitAlt, FaGraduationCap, FaHtml5, FaJava, FaJs, FaLaptopCode, FaNodeJs, FaPython, FaReact, FaUserGraduate
  };

export default function About() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <motion.div 
                    className="flex flex-col md:flex-row items-center md:items-start mb-12 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:mr-16"
                    >
                        <Image
                            src="/images/sa.jpg"
                            alt="Profile Picture"
                            width={500}
                            height={500}
                            objectFit="cover"
                        />
                    </motion.div>
                    <div>
                        <motion.h1 
                            className="text-5xl font-bold mb-6 text-gray-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            About Me
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-gray-700 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            I'm a passionate B.Tech student at JNTUGV, specializing in Information Technology. With a strong foundation in computer science and a keen interest in cutting-edge technologies, I've developed expertise in web development, backend services, and cybersecurity. My goal is to build efficient, scalable, and secure software solutions that make a positive impact.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.h2 
                    className="text-3xl font-semibold mb-6 text-gray-800 flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaLaptopCode className="mr-3 text-blue-500" />
                    Technical Skills
                </motion.h2>
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {data.skills.map((skill, index) => {
                        const IconComponent = iconMap[skill.icon] || FaJava;
                        return (
                            <motion.div 
                                key={index} 
                                className="flex items-center bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-5 hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <IconComponent className="text-3xl mr-3 text-blue-500" />
                                <span className="text-lg font-medium">{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div 
                    className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-8 mb-12 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center">
                        <FaUserGraduate className="mr-3 text-blue-500" />
                        Academic Journey
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        Throughout my academic journey, I've worked on various projects that have honed my problem-solving skills and ability to work in team environments. I'm particularly interested in the intersection of technology and cybersecurity, always staying updated with the latest security practices and trends.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                        <FaGraduationCap className="mr-3 text-blue-500" />
                        Education
                    </h3>
                    {data.education.map((edu, index) => (
                        <motion.div 
                            key={index} 
                            className="mb-6 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * index }}
                            whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        >
                            <h4 className="text-xl font-medium text-gray-800 mb-2">{edu.degree}</h4>
                            <p className="text-lg text-gray-600 mb-1">{edu.institution}</p>
                            <p className="text-md text-gray-500 mb-3">{edu.year}</p>
                            <ul className="list-disc list-inside">
                                {edu.achievements.map((achievement, i) => (
                                    <li key={i} className="text-gray-700 mb-1">{achievement}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FaLaptopCode className="mr-3 text-blue-500" />
                        Personal Growth & Interests
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        Beyond coding, I'm deeply passionate about continuous learning and personal development. I actively engage in coding competitions, contribute to open-source projects, and participate in hackathons to challenge myself. I have a keen interest in cybersecurity and enjoy exploring ethical hacking in my spare time. Additionally, I'm focused on developing leadership skills through team projects and technical community involvement.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Hobbies</h3>
                    <ul className="list-disc list-inside text-xl text-gray-700">
                        {data.hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
