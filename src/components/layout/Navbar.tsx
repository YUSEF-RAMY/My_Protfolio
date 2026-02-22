import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Cpu } from 'lucide-react'; // استبدلت الذرة بأيقونة المعالج لمظهر تقني أكتر
import { cn } from '../../lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg border-b border-[#3a5a40]/20 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold cursor-pointer flex items-center gap-2"
        >
          {/* Logo Icon - بالألوان الجديدة */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[#3a5a40]"
          >
            <Cpu size={28} />
          </motion.div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5c4033] to-[#3a5a40]">
            YR
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#3a5a40] font-bold"
              className="text-gray-300 hover:text-[#8b5e3c] cursor-pointer transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 text-gray-300">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0f0f0f] border-t border-gray-800 absolute w-full shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-[#3a5a40] transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <span className="w-2 h-2 rounded-full bg-[#5c4033]/20 group-hover:bg-[#5c4033]" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;