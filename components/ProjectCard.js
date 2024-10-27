import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, link, icon, status, liveLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        {link !== 'private' ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
          >
            {icon}
            <span className="ml-2">View Code</span>
          </a>
        ) : (
          <span className="text-gray-500 flex items-center">
            <FaLock className="mr-2" />
            Private Project
          </span>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 transition-colors flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className={`text-sm font-semibold ${status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
          {status}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;