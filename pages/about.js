import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaCodeBranch, FaServer } from 'react-icons/fa';
import data from '../data/aboutData.json';

const GlassCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="flex items-center space-x-4 mb-8">
    <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-emerald-400">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
  </div>
);

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 md:mb-16 text-center"
      >
        <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl mb-6 border border-indigo-500/20 backdrop-blur-md">
          <FaServer size={24} />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
          Architecting Reliability.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-6">
          I specialize in building robust, highly available backend infrastructure. 
          My focus is on writing clean code, optimizing database performance, 
          and deploying scalable applications utilizing modern cloud technologies.
        </p>
        <p className="text-emerald-400/80 font-mono text-sm tracking-wide bg-emerald-500/10 inline-block px-4 py-2 rounded-xl border border-emerald-500/20 shadow-[0_4px_20px_rgba(16,185,129,0.1)]">
          Currently engineering at Digital Monitoring Cell - JNTU-GV
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Education Timeline */}
        <GlassCard delay={0.1}>
          <SectionHeader title="Education" icon={FaGraduationCap} />
          <div className="space-y-10">
            {data.education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <h3 className="text-lg font-semibold text-slate-200">{edu.degree}</h3>
                <p className="text-emerald-400 font-medium mb-1 text-sm">{edu.institution}</p>
                <div className="text-slate-500 text-xs font-mono mb-4 px-2 py-1 bg-white/5 inline-block rounded-md border border-white/5">
                  {edu.year}
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((ach, i) => (
                    <li key={i} className="text-slate-400 font-light text-sm flex items-start">
                      <span className="text-emerald-500/50 mr-2 mt-1 blur-[0.5px]">►</span>
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Philosophy & Interests */}
        <div className="space-y-6 md:space-y-8">
          <GlassCard delay={0.2} className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
            <SectionHeader title="Philosophy" icon={FaServer} />
            <p className="text-slate-400 font-light leading-relaxed">
              I believe that great software is defined by its architecture under the hood. 
              My approach prioritizes testability, rigorous security protocols, and efficient 
              data handling capabilities over superficial frontend features. Every millisecond counts.
            </p>
          </GlassCard>

          <GlassCard delay={0.3}>
            <SectionHeader title="Interests" icon={FaCodeBranch} />
            <div className="flex flex-wrap gap-2">
              {data.hobbies.map((hobby, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 text-slate-300 font-medium text-sm px-4 py-2 rounded-xl hover:bg-white/10 transition-colors shadow-sm">
                  {hobby}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
