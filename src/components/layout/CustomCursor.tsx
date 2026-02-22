import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999] hidden md:block" // Hidden on mobile
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.8 : 1, // تكبير شوية عند الـ Hover
        borderColor: isHovering ? '#5c4033' : '#3a5a40', // من الزيتي للبني عند الـ Hover
        backgroundColor: isHovering ? 'rgba(92, 64, 51, 0.1)' : 'transparent' // خلفية بنية خفيفة جداً
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 400,
        mass: 0.5
      }}
    >
        {/* النقطة المركزية باللون الزيتي */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#3a5a40] rounded-full -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

export default CustomCursor;