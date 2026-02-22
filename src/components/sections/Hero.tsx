import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ضفت AnimatePresence عشان سلاسة تغيير النصوص
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import ParticlesBackground from '../ui/ParticlesBackground';
import CodeSnippet from '../ui/CodeSnippet';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const taglines = [
    "Building Scalable Backend Architectures",
    "Architecting Cloud-Native Solutions",
    "Integrating AI into Web Applications",
    "Crafting High-Performance Full-Stack Apps"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background - ثيم السيرفرات المظلم */}
      <div className="absolute inset-0 bg-[#0a0a0a] transition-colors duration-300 -z-20" /> 
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,90,64,0.15),transparent)] -z-10" />
      
      <ParticlesBackground />
      <CodeSnippet />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-[#8b5e3c] mb-4" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.h2>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {/* تدرج لوني احترافي */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5c4033] via-[#3a5a40] to-[#1a2f1a] font-black">
              Yousef Ramy
            </span>
          </h1>

          <motion.div
            className="text-2xl md:text-3xl text-gray-400 mb-8 h-10 font-semibold"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Full-Stack Developer & Cloud Enthusiast
          </motion.div>

          {/* نصوص متغيرة بسلاسة */}
          <div className="h-8 mb-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <AnimateText key={textIndex} text={taglines[textIndex]} />
            </AnimatePresence>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* الزر الأساسي - زيتي يقلب بني */}
            <Link to="projects" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto">
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-64 px-8 py-4 bg-[#3a5a40] text-white rounded-full font-semibold overflow-hidden shadow-lg shadow-[#1a2f1a]/50 transition-all"
                >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#5c4033] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
            </Link>

            {/* الزر الثانوي - بوردر بني */}
            <Link to="contact" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto">
                <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(92, 64, 51, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-64 px-8 py-4 border-2 border-[#5c4033] text-gray-300 rounded-full font-semibold hover:bg-[#5c4033]/10 transition-colors flex items-center gap-2 justify-center"
                >
                Contact Me <Mail size={20} />
                </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* مؤشر التمرير */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#5c4033]/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#3a5a40] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const AnimateText = ({ text }: { text: string }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="text-lg md:text-xl text-gray-500 italic"
  >
    {text}
  </motion.div>
);

export default Hero;