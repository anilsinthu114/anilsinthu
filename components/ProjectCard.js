import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectCard({ title, description, techStack, link, liveLink, status, index, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden flex flex-col group hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Top Banner Area / Image Layer */}
      {image ? (
        <div className="h-48 w-full relative overflow-hidden group-hover:opacity-90 transition-opacity duration-500">
           <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 400px" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10" />
        </div>
      ) : (
        <div className="h-2 w-full bg-gradient-to-r from-emerald-500/50 via-indigo-500/50 to-purple-500/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      <div className="p-6 sm:p-8 flex-grow flex flex-col relative z-10">
        
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
            {title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md ${
            status === 'Completed' 
              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
              : 'bg-slate-500/10 text-slate-300 border-slate-500/20'
          }`}>
            {status}
          </span>
        </div>
        
        <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.map((tech, idx) => (
            <span key={idx} className="bg-white/5 border border-white/10 text-slate-300 text-xs font-mono px-3 py-1.5 rounded-lg shadow-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t border-white/5">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2.5 px-4 flex items-center justify-center text-sm font-medium text-slate-300 hover:text-white transition-all duration-300"
            >
              <FaGithub className="mr-2.5" size={16} /> Repository
            </a>
          ) : (
            <span className="flex-1 bg-slate-900/50 border border-white/5 rounded-xl py-2.5 px-4 flex items-center justify-center text-sm font-medium text-slate-500 cursor-not-allowed">
              <FaLock className="mr-2.5" size={16} /> Private
            </span>
          )}
          
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl py-2.5 px-4 flex items-center justify-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              <FaExternalLinkAlt className="mr-2.5" size={14} /> Live View
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}