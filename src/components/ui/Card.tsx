import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      // تأثير 3D خفيف مع تحريك الكارت للأعلى عند الـ Hover
      whileHover={{ 
        y: -12, 
        rotateX: 2, 
        rotateY: 2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={cn(
        // الخلفية سوداء شفافة مع Backdrop blur لتعزيز إحساس الـ Glassmorphism
        "bg-[#111111]/60 backdrop-blur-md rounded-2xl p-8",
        // حدود الكارت بلون زيتي خفيف جداً يظهر هويتك التقنية
        "border border-gray-800 hover:border-[#3a5a40]/40",
        // ظل خفيف باللون البني عند الـ Hover ليعطي عمق (Glow effect)
        "shadow-2xl hover:shadow-[#5c4033]/10 transition-all duration-500",
        "relative overflow-hidden group",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* لمسة جمالية: خط زيتي خفيف يظهر في أعلى الكارت عند الـ Hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3a5a40] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* محتوى الكارت */}
      <div className="relative z-10">
        {children}
      </div>

      {/* لمسة "نور" خفيفة في زاوية الكارت (Radial Gradient) */}
      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-[#5c4033]/5 rounded-full blur-3xl group-hover:bg-[#3a5a40]/10 transition-colors duration-700" />
    </motion.div>
  );
};

export default Card;