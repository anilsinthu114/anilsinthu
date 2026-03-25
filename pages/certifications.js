import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import certificationsData from '../data/certifications.json';

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-6 sm:p-8 rounded-3xl flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          <div className="bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 p-3 rounded-2xl border border-white/10 text-emerald-400 group-hover:text-white transition-colors duration-300 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
            <FaCertificate size={24} />
          </div>
          <div className="flex items-center text-slate-400 text-xs font-medium tracking-wide bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <FaRegCalendarAlt className="mr-2 opacity-70" />
            {cert.date}
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 leading-snug line-clamp-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-500">
          {cert.name}
        </h3>
        
        <p className="text-emerald-400 font-medium text-sm mb-6 tracking-wide uppercase">
          {cert.issuer}
        </p>
        
        <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 flex-grow">
          {cert.description}
        </p>
        
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center w-full py-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 border border-white/10"
          >
            Verify Credential <FaExternalLinkAlt className="ml-2.5 opacity-70" size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default function Certifications() {
  const sortedCertifications = certificationsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 relative">
      
      {/* Background ambient glow specific to Certifications */}
      <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-24 md:text-center relative z-10"
      >
        <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Validation</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
          Verified Expertise.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Formal credentials reinforcing my backend systems knowledge, cloud architecture competencies, and engineering discipline.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {sortedCertifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} index={index} />
        ))}
      </div>

    </div>
  );
}
