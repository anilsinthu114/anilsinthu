import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTerminal } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 flex flex-col items-center relative">
      
      {/* Background ambient glow specific to Contact */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60vw] h-[40vw] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-24 text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center p-3 bg-white/5 text-slate-300 rounded-2xl mb-6 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <FaTerminal size={24} />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
          Establish Connection.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Whether you have a complex backend requirement, a platform architecture challenge, 
          or just want to talk code—I'm ready to collaborate.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 w-full max-w-5xl relative z-10">
        
        {/* Contact Info Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 space-y-4"
        >
          <a
            href="mailto:anilsinthu114@gmail.com"
            className="flex items-center p-6 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-white/5 p-4 border border-white/10 rounded-2xl text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300 shadow-sm">
              <FaEnvelope size={24} />
            </div>
            <div className="ml-5 flex flex-col items-start">
              <h3 className="text-slate-400 group-hover:text-white text-xs font-semibold tracking-wider uppercase mb-1 transition-colors">Email</h3>
              <p className="text-slate-200 font-medium text-sm sm:text-base break-words w-full">anilsinthu114@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/anilsinthu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-white/5 p-4 border border-white/10 rounded-2xl text-slate-300 group-hover:text-[#0a66c2] group-hover:border-[#0a66c2]/30 transition-all duration-300 shadow-sm">
              <FaLinkedin size={24} />
            </div>
            <div className="ml-5 flex flex-col items-start">
              <h3 className="text-slate-400 group-hover:text-white text-xs font-semibold tracking-wider uppercase mb-1 transition-colors">Network</h3>
              <p className="text-slate-200 font-medium text-sm sm:text-base">linkedin.com/in/anilsinthu</p>
            </div>
          </a>

          <a
            href="https://github.com/anilsinthu114"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-white/5 p-4 border border-white/10 rounded-2xl text-slate-300 group-hover:text-white transition-all duration-300 shadow-sm">
              <FaGithub size={24} />
            </div>
            <div className="ml-5 flex flex-col items-start">
              <h3 className="text-slate-400 group-hover:text-white text-xs font-semibold tracking-wider uppercase mb-1 transition-colors">Code</h3>
              <p className="text-slate-200 font-medium text-sm sm:text-base">github.com/anilsinthu114</p>
            </div>
          </a>
        </motion.div>

        {/* Contact Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </motion.div>
        
      </div>

    </div>
  );
}
