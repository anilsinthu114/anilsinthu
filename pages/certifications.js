import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import Image from 'next/image';

const CertificationCard = ({ cert, index }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
      <div className="bg-blue-100 p-3 rounded-full mr-4 mb-4 md:mb-0">
        <FaCertificate className="text-3xl md:text-4xl text-blue-600" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{cert.name}</h3>
    </div>
    <div className="mb-6 relative w-full h-64 md:h-80 lg:h-96">
      <Image
        src={cert.image}
        alt={cert.name}
        layout="fill"
        objectFit="contain"
        className="rounded-lg"
      />
    </div>
    <p className="text-xl md:text-2xl text-blue-600 mb-4">{cert.issuer}</p>
    <p className="text-gray-700 mb-6 text-base md:text-lg">{cert.description}</p>
    <div className="flex flex-wrap justify-between items-center text-gray-600">
      <div className="flex items-center mb-2 mr-4">
        <FaCalendarAlt className="mr-2" />
        <span className="text-sm md:text-base">{cert.date}</span>
      </div>
      {cert.certificate_id && (
        <div className="flex items-center mb-2">
          <FaIdCard className="mr-2" />
          <span className="text-sm md:text-base">ID: {cert.certificate_id}</span>
        </div>
      )}
    </div>
    {cert.link && (
      <motion.a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Certificate
        <FaExternalLinkAlt className="ml-2" />
      </motion.a>
    )}
  </motion.div>
);

export default function Certifications() {
  const certifications = [
    {
      name: "Beginner's Guide to Cybersecurity",
      issuer: 'IBM',
      description: "Completed course on Beginner's Guide to Cybersecurity",
      date: '19 August 2024',
      certificate_id: 'd292ba97360d4156aeb4d8cb044c768f',
      link: 'https://drive.google.com/file/d/1NDiL6UkIS_SxOuU8iBtFgPMDKUq7CuFR/view?usp=sharing',
      image: '/images/ibm_edx.png'
    },
    {
      name: 'Cybersecurity Internship',
      issuer: 'SkillDzire',
      description: 'Completed comprehensive internship on Cybersecurity',
      date: '28 June 2024',
      certificate_id: 'SDST-14555',
      link: 'https://drive.google.com/file/d/1Fe8167w0O8b-cHNpZvoXQ2-T3fpGahZf/view?usp=drive_link',
      image: '/images/skilldzire_cybersecurity.jpg'
    },
    {
      name: 'Research Internship',
      issuer: 'Dr. Mohammad Farukh Hasmi - National Institute of Technology, Warangal',
      description: 'Conducted research on Detection of Covid-19, Tuberculosis and Pneumonia using X-ray images.',
      date: 'May 2024 - July 2024',
      link: 'https://drive.google.com/file/d/1MhgxtYribIpbph1YCwrw9Y73tHi93zIs/view?usp=drive_link',
      image: '/images/nit_warangal.jpg'
    },
    {
      name: "Software Test Automation",
      issuer: "SmartInternz",
      description: "Completed internship on Software Test Automation using Katalon Studio",
      date: "4 December 2023 - 12 February 2024",
      certificate_id: 'VIP-STA-2024-94368',
      link: "https://drive.google.com/file/d/1FeyMCvUxHqUwimNz1NBENURzM8lWz37S/view?usp=drive_link",
      image: '/images/smartinternz.png'
    },
    {
      name: "30 Days of Code",
      issuer: "Codechef",
      description: "Successfully completed 30 Days of Code challenge in Java",
      date: "8 August 2023",
      certificate_id: 'cf153c9',
      link: "https://drive.google.com/file/d/1N7fV-5g_YNXJR1BBasHOxGUsJ4DTYhvm/view?usp=drive_link",
      image: '/images/codechef_30.png'
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Simplilearn',
      description: 'Completed course on Introduction to Cybersecurity',
      date: '22 November 2022',
      certificate_id: '3952513',
      link: 'https://drive.google.com/file/d/1FhPBE49FTRDAqINxeBl3vBYcfY9KI97F/view?usp=drive_link',
      image: '/images/skillup.png'
    }
  ];

  // Sort certifications by date (latest first)
  const sortedCertifications = certifications.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Certifications
          <motion.div
            className="mt-4 mx-auto w-24 h-1 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCertifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
