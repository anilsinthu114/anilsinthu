import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaServer, FaTerminal, FaDatabase } from 'react-icons/fa';
import rolesData from '../data/roles.json';
import projectsData from '../data/projects.json';
import About from './about';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Certifications from './certifications';
import Contact from './contact';

const roles = rolesData.roles;

// Premium Glass Card component
const GlassCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out curve
    className={`bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] transition-all duration-500 group relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </motion.div>
);

export default function Home() {
  const featuredProject = projectsData[0];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-24 lg:gap-32 w-full">

      <section id="home" className="flex flex-col gap-6 md:gap-8 pt-6 sm:pt-12 scroll-mt-32">

        {/* Top Row: Hero and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Main Hero Card */}
          <GlassCard className="md:col-span-2 relative overflow-visible">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 z-10 relative">

              <div className="flex-1">
                <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                  AVAILABLE FOR HIRE
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-4 leading-[1.1]">
                  Anil Sinthu.
                </h1>
                <h2 className="text-2xl sm:text-3xl font-medium text-slate-300 mb-6 tracking-tight">
                  {roles[0]}
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
                  I architect and engineer scalable systems, robust data pipelines, and highly available APIs. Relentlessly focused on performance and cloud infrastructure.
                </p>
              </div>

              {/* Profile Photo */}
              <div className="relative shrink-0 hidden sm:block md:-mr-4 mt-6 md:mt-0 xl:-mr-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-indigo-500 rounded-[2.5rem] blur-2xl opacity-30 animate-pulse" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-40 h-40 md:w-60 md:h-60 relative rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-10 hover:shadow-[0_20px_50px_rgba(52,211,153,0.3)] transition-shadow duration-500"
                >
                  <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <Image
                    src="/images/profile_sa.jpg"
                    alt="Anil Sinthu"
                    fill
                    sizes="(max-width: 768px) 160px, 240px"
                    priority
                    className="object-cover scale-[1.03] hover:scale-100 transition-transform duration-700"
                  />
                </motion.div>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-auto relative z-10">
              <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="bg-white text-slate-950 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all cursor-pointer flex items-center gap-2 duration-300 group">
                View Architecture <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1q9lum4ID1XdXD1z9lMfKGvZVVr1L1Ob6/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white font-medium px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/5 transition-all cursor-pointer duration-300"
              >
                Resume
              </a>
            </div>

            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
          </GlassCard>

          {/* Socials Box */}
          <GlassCard delay={0.1} className="flex flex-col text-center justify-between">
            <div className="space-y-4 w-full">
              <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6 flex items-center justify-center">
                <span className="w-8 h-[1px] bg-white/10 mr-4"></span> Connect <span className="w-8 h-[1px] bg-white/10 ml-4"></span>
              </h2>
              <a href="https://github.com/anilsinthu114" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/5 p-4 rounded-2xl flex justify-between items-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/link">
                <span className="font-medium">GitHub</span> <FaGithub size={20} className="group-hover/link:text-white group-hover/link:scale-110 transition-all" />
              </a>
              <a href="https://linkedin.com/in/anilsinthu" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/5 p-4 rounded-2xl flex justify-between items-center text-slate-300 hover:text-[#0a66c2] hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/link">
                <span className="font-medium text-slate-300 group-hover/link:text-white transition-colors">LinkedIn</span> <FaLinkedin size={20} className="group-hover/link:scale-110 transition-all" />
              </a>
              <a href="mailto:anilsinthu114@gmail.com" className="bg-white/5 border border-white/5 p-4 rounded-2xl flex justify-between items-center text-slate-300 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group/link">
                <span className="font-medium text-slate-300 group-hover/link:text-white transition-colors">Email</span> <FaEnvelope size={20} className="group-hover/link:scale-110 transition-all" />
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Middle Row: Stack & Featured */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">

          {/* Stack Highlight */}
          <GlassCard className="md:col-span-2" delay={0.2}>
            <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6 flex justify-between items-center">
              Core Stack
              <a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>
                <FaArrowRight className="cursor-pointer hover:text-white transition-colors text-slate-600" />
              </a>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/5 p-4 rounded-2xl flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-slate-300"><FaTerminal size={24} /></div>
                <div>
                  <span className="block font-semibold text-slate-200">Backend</span>
                  <span className="text-sm font-light text-slate-500">Node.js, Python, Java</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/5 p-4 rounded-2xl flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-slate-300"><FaDatabase size={24} /></div>
                <div>
                  <span className="block font-semibold text-slate-200">Databases</span>
                  <span className="text-sm font-light text-slate-500">MySQL, PostgreSQL, Mongo</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/5 p-4 rounded-2xl flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-xl text-slate-300"><FaServer size={24} /></div>
                <div>
                  <span className="block font-semibold text-slate-200">DevOps</span>
                  <span className="text-sm font-light text-slate-500">Linux, Docker, AWS</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Featured Project */}
          <GlassCard className="md:col-span-3 flex flex-col relative overflow-hidden" delay={0.3}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

            <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6 flex justify-between items-center z-10">
              Featured System
              <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>
                <FaArrowRight className="cursor-pointer hover:text-white transition-colors text-slate-600" />
              </a>
            </h2>

            <div className="flex flex-col flex-grow z-10 justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{featuredProject.title}</h3>
              <p className="text-slate-400 font-light mb-8 max-w-lg leading-relaxed">{featuredProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.techStack.map((tech, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 text-slate-300 text-xs font-mono px-3 py-1.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="mr-auto bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 py-2.5 px-6 rounded-full flex items-center gap-2 transition-all duration-300">
                Inspect Source <FaGithub size={16} />
              </a>
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 w-full"><About /></section>
      <section id="skills" className="scroll-mt-24 w-full"><Skills /></section>
      <section id="experience" className="scroll-mt-24 w-full"><Experience /></section>
      <section id="projects" className="scroll-mt-24 w-full"><Projects /></section>
      <section id="certifications" className="scroll-mt-24 w-full"><Certifications /></section>
      <section id="contact" className="scroll-mt-24 pb-24 w-full"><Contact /></section>

    </div>
  );
}