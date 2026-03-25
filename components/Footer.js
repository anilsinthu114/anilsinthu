import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/anilsinthu114', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/anilsinthu', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:anilsinthu114@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="mt-auto border-t border-white/5 bg-slate-950/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center space-x-2 text-slate-400 text-sm font-medium mb-4 md:mb-0">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
          <span>&copy; {currentYear} Anil Sinthu. All rights reserved.</span>
        </div>
        
        <div className="flex space-x-4">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-emerald-500/50 hover:text-white text-slate-400 transition-all shadow-[0_0_15px_rgba(255,255,255,0.0)] hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}