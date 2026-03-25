import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 relative">
      
      {/* Background ambient glow specific to Projects */}
      <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center relative z-10"
      >
        <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
          System Architecture.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          A curated collection of scalable backend systems, secure data pipelines, and highly available APIs I've engineered for production environments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>

    </div>
  );
}
