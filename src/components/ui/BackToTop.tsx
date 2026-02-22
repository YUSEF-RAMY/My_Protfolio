import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // يظهر بعد سكرول 500 بيكسل
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-[60]" // z-index عالي عشان ميتغطاش بالـ Footer
        >
          <Link to="home" smooth={true} duration={800} offset={-70}>
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#5c4033", // يقلب بني عند الـ Hover
                boxShadow: "0 0 20px rgba(92, 64, 51, 0.4)" 
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-[#3a5a40] text-white rounded-full shadow-2xl transition-colors duration-300 group relative"
              aria-label="Back to Top"
            >
              {/* تأثير النبضة المحيطة بالزرار */}
              <span className="absolute inset-0 rounded-full bg-[#3a5a40] animate-ping opacity-20 group-hover:hidden"></span>
              
              <ArrowUp size={24} className="relative z-10" />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;