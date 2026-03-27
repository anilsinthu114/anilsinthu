import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Image from 'next/image';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Validation' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection for SPA
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${section}`;
            break;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleNavClick = (e, href) => {
    // If we're not on the index page, route to home and then hash
    if (router.pathname !== '/') {
      return;
    }

    e.preventDefault();
    setIsOpen(false);

    // Smooth scroll if on the SPA page
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 md:left-1/3 md:-translate-x-1/2 md:right-auto md:top-6 z-50 md:w-fit px-6 py-3 rounded-full flex justify-between items-center transition-all duration-300 ${scrolled
        ? 'bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
        : 'bg-slate-900/30 backdrop-blur-sm border border-transparent'
        }`}
    >
      <Link href="/#home" scroll={false}>
        <span onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-bold tracking-tight text-white cursor-pointer mr-auto md:mr-10 flex items-center">
          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2.5 shadow-[0_0_15px_rgba(52,211,153,0.4)] border border-white/20">
            <Image src="/images/profile_sa.jpg" alt="Anil.S" fill className="object-cover" sizes="32px" />
          </div>
          Anil.S
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-1 border-l border-white/10 pl-6">
        {navItems.map((item) => {
          // If we are on the SPA index page, checking hash, otherwise just basic routing
          const isActive = router.pathname === '/' ? activeSection === item.href : false;

          return (
            <a
              key={item.href}
              href={router.pathname === '/' ? item.href : `/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
                ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col space-y-2 md:hidden shadow-2xl origin-top"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={router.pathname === '/' ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-center text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
