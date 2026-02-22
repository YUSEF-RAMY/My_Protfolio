import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({ title, subtitle, align = 'center' }: SectionHeadingProps) => {
  const alignmentClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  };

  return (
    <div className={`mb-16 flex flex-col ${alignmentClass[align]}`}>
      <div className="relative inline-block">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          /* تدرج لوني بين البني الدافئ والزيتي العميق */
          className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#8b5e3c] via-[#3a5a40] to-[#1a2f1a] pb-4"
        >
          {title}
        </motion.h2>
        
        {/* خط سفلي متحرك (Animated Underline) */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '60%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
          className={`h-1.5 bg-gradient-to-r from-[#3a5a40] to-transparent rounded-full ${align === 'center' ? 'mx-auto' : ''}`}
        />
      </div>

      {subtitle && (
        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 1 }}
           className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl text-lg font-medium italic"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;