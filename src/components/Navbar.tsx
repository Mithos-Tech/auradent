import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtHero, setIsAtHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Defer state update using simple scroll position checks
      if (window.scrollY < 120) {
        setIsAtHero(true);
      } else {
        setIsAtHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Ventajas', href: '#ventajas' },
    { name: 'Casos', href: '#casos' },
    { name: 'Preguntas', href: '#faq' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 100; // Offset for the beautiful floating capsule
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 pointer-events-none flex justify-center px-4 sm:px-6">
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: isAtHero ? 1 : 0, 
          y: isAtHero ? 0 : -30,
          scale: isAtHero ? 1 : 0.95
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-4xl bg-[#EBECF2]/85 backdrop-blur-lg border border-white/50 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${
          isOpen ? 'rounded-[2rem]' : 'rounded-full'
        }`}
      >
        <div className="px-6 h-16 flex items-center justify-between">
          {/* Left: Brand Logo & Typography */}
          <div className="flex items-center gap-2.5">
            <motion.div
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-sm cursor-pointer shrink-0"
              whileHover={{ scale: 1.05, rotate: 5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Sparkles className="w-4.5 h-4.5 text-white" />
            </motion.div>
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-base leading-none tracking-tight text-slate-950">
                AuraDent
              </span>
              <span className="text-[9px] uppercase text-indigo-700 font-sans tracking-widest font-extrabold">
                Premium
              </span>
            </div>
          </div>

          {/* Center: Premium Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition-colors relative py-1 px-2.5"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right: Premium CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              onClick={(e) => handleScrollToSection(e, '#contacto')}
              className="px-5 py-2 rounded-full bg-slate-950 hover:bg-indigo-600 text-white font-bold tracking-wider uppercase text-[11px] transition-all duration-300 shadow-sm"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-slate-700 hover:text-slate-950 hover:bg-white/40 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-[#EBECF2]/95 rounded-b-[2rem] border-t border-white/20"
            >
              <div className="px-6 pt-2 pb-6 space-y-3 text-left">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="block px-4 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white/50 transition-all"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="#contacto"
                    onClick={(e) => handleScrollToSection(e, '#contacto')}
                    className="block w-full text-center px-6 py-3 rounded-full bg-slate-950 hover:bg-indigo-600 text-white font-bold tracking-wider uppercase text-xs transition-all shadow"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
