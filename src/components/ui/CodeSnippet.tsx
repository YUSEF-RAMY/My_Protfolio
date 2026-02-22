import { motion } from 'framer-motion';

const CodeSnippet = () => {
  const codeLines = [
    "class BackendArchitect {",
    "  constructor() {",
    "    this.name = 'Yousef Ramy';",
    "    this.stack = ['Laravel', 'DevOps' , 'Cloud'];",
    "    this.focus = 'Scalable Architectures';",
    "  }",
    "  async solve(problem) {",
    "    return await logic && optimization;",
    "  }",
    "}"
  ];

  return (
    /* 1. رفعنا الشفافية من opacity-20 لـ opacity-40 وضيفنا backdrop-blur */
    <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-0 opacity-30 hover:opacity-70 pointer-events-none select-none font-mono text-sm transition-opacity duration-700">
      
      {/* 2. إضافة shadow ملون (زيتي) ليعطي عمق ووضوح أكتر على الخلفية السوداء */}
      <div className="bg-[#0f0f0f]/80 backdrop-blur-sm text-gray-400 p-6 rounded-xl border border-gray-700/50 shadow-[0_20px_50px_rgba(58,90,64,0.3)] skew-y-3 -rotate-3 transform hover:rotate-0 hover:skew-y-0 transition-all duration-700">
        
        {/* Terminal Header */}
        <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
          <div className="w-3 h-3 rounded-full bg-[#5c4033]" /> {/* توضيح ألوان الأزرار */}
          <div className="w-3 h-3 rounded-full bg-[#3a5a40]" />
          <div className="w-3 h-3 rounded-full bg-gray-700" />
        </div>

        {/* Code Content */}
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 1.2 }}
            className="whitespace-pre"
          >
            <span className="text-gray-600 mr-4 inline-block w-4 text-right">{index + 1}</span>
            <span className={
              line.includes('class') || line.includes('constructor') || line.includes('return') || line.includes('async')
                ? 'text-[#a67c52] font-semibold' // تفتيح لون البني قليلاً لزيادة التباين
                : line.includes("'") 
                ? 'text-[#4e7a56]' // تفتيح لون الزيتي للوضوح
                : line.includes('this')
                ? 'text-gray-200'
                : 'text-gray-500'
            }>
              {line}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodeSnippet;