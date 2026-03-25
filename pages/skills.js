import { motion } from 'framer-motion';
import skillData from '../data/skills.json';
import {
  FaAws, FaDatabase, FaDocker, FaGitAlt, FaJava,
  FaLinux, FaNodeJs, FaPython, FaPlug, FaProjectDiagram,
  FaServer, FaNetworkWired
} from 'react-icons/fa';
import { SiC, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';

const iconMap = {
  FaJava, FaPython, FaNodeJs, SiC,
  SiMysql, SiPostgresql, SiMongodb, FaDatabase,
  FaLinux, FaDocker, FaServer, FaAws,
  FaGitAlt, FaPlug, FaProjectDiagram, FaNetworkWired
};

// Removed subjective proficiency labels in favor of an AI-assisted ecosystem layout

const GlassCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-500 relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 relative">
      
      {/* Background ambient glow specific to Skills page */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl mb-6 border border-emerald-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <FaDatabase size={24} />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
          Technical Arsenal.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          My core production ecosystem. I heavily leverage modern AI-assisted engineering workflows to rapidly architect, debug, and scale systems across these domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        {skillData.skillCategories.map((category, idx) => (
          <GlassCard key={idx} delay={idx * 0.1}>
            <div className="flex items-center mb-8 pb-4 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <h2 className="text-xl font-semibold tracking-tight text-slate-200">
                {category.name}
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => {
                const IconComponent = iconMap[skill.icon] || FaServer;
                
                return (
                  <motion.div 
                    key={skillIdx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (skillIdx * 0.05), duration: 0.4 }}
                    className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/50 hover:bg-slate-800 border border-white/5 hover:border-emerald-500/30 rounded-full cursor-default transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group/badge"
                  >
                    <IconComponent className="text-slate-500 group-hover/badge:text-emerald-400 transition-colors text-sm" />
                    <span className="text-slate-300 group-hover/badge:text-white text-sm font-medium transition-colors">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        ))}
      </div>

    </div>
  );
}
