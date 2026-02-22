import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      // التعديل هنا في الـ Gradient: من البني للزيتي
      className="fixed top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#5c4033] to-[#3a5a40] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;