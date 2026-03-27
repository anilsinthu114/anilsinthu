import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import experiencesData from '../data/experiences.json';

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 md:pl-0 mb-12 md:mb-20 last:mb-0 group/timeline"
    >
      {/* Timeline Line (Desktop only) */}
      <div className="hidden md:block absolute left-1/2 -ml-[1px] w-[2px] h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

      <div className={`md:flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Glowing Timeline Dot */}
        <div className="absolute left-[-5px] top-8 md:left-1/2 md:-ml-[11px] w-6 h-6 rounded-full bg-slate-950 border-4 border-slate-800 group-hover/timeline:border-emerald-500 transition-colors duration-500 z-10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(16,185,129,1)]" />
        </div>

        {/* Empty space for alternating layout */}
        <div className="hidden md:block w-5/12" />

        {/* Content Card */}
        <div className="w-full md:w-5/12 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors duration-300 mb-2">{exp.title}</h3>
                <h4 className="text-slate-300 font-medium text-base">{exp.company || exp.college}</h4>
              </div>
              {exp.image && (
                <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 ml-4 rounded-xl overflow-hidden border border-white/10 bg-white/5 p-1">
                  <Image src={exp.image} alt={exp.company || exp.college} fill className="object-cover rounded-lg" sizes="64px" />
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap text-slate-400 font-light text-sm mb-6 gap-y-3 gap-x-4 border-t border-white/10 pt-4 w-full">
              <div className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <FaCalendarAlt className="mr-2 text-emerald-500/70" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <FaMapMarkerAlt className="mr-2 text-indigo-500/70" />
                <span>{exp.location}</span>
              </div>
            </div>

            <p className="text-slate-300 font-light leading-relaxed mb-6">{exp.description}</p>

            <ul className="space-y-3">
              {exp.achievements && exp.achievements.map((ach, idx) => (
                <li key={idx} className="text-slate-400 text-sm font-light flex items-start">
                  <span className="text-emerald-500/50 mr-3 mt-1 text-xs">◆</span>
                  <span className="leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 relative">
      
      {/* Mobile-only continuous timeline line */}
      <div className="md:hidden absolute left-[22px] top-48 bottom-10 w-[2px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-24 md:text-center relative z-10"
      >
        <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-4 block">History</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
          Engineering Trajectory.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Delivering robust platform solutions, optimizing deployment phases, and enforcing strict security protocols across production ecosystems.
        </p>
      </motion.div>

      <div className="pt-8 relative z-10">
        {experiencesData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>

    </div>
  );
}
