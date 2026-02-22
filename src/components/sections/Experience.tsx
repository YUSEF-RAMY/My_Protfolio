import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-react'; // ضفنا أيقونات جديدة للتميز
import SectionHeading from '../ui/SectionHeading';

const experiences = [
  {
    title: "Full-Stack Web Development Trainee",
    company: "ITI (Information Technology Institute)",
    period: "2024 - Present",
    description: "Participating in an intensive professional program focusing on high-level enterprise architecture. Mastering Laravel for scalable backends and modern frontend integration.",
    skills: ["Laravel", "MySQL", "PHP", "Architecture"],
    highlight: "Enterprise-grade Development"
  },
  {
    title: "Cloud Computing Essentials Graduate",
    company: "NTI (National Telecommunication Institute)",
    period: "2024",
    description: "Mastered cloud infrastructure management and virtualization. Specialized in networking and secure Linux environment administration with top-tier performance.",
    skills: ["Cloud Tech", "Linux Admin", "Networking", "Virtualization"],
    highlight: "Final Grade: 97%" // إضافة التميز اللي كان في لينكد إن
  },
  {
    title: "AWS Academy Graduate",
    company: "AWS Academy",
    period: "2024",
    description: "Validated expertise in AWS Cloud services, focusing on global infrastructure, security, and cost-efficient architectural designs.",
    skills: ["AWS", "EC2 / S3", "IAM Security", "Cloud Architecting"],
    highlight: "Cloud Foundations Certified"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Learning Path & Experience" subtitle="Academic excellence & professional training" />

        <div className="relative max-w-5xl mx-auto mt-16">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#3a5a40]/0 via-[#3a5a40]/40 to-[#3a5a40]/0" />

             {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative mb-12 flex justify-between items-center w-full">
                      {/* Empty Space for Desktop */}
                      <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-1' : 'md:order-2'}`} />
                      
                      {/* Central Dot with Pulse Effect */}
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3a5a40] rounded-full z-10 border-4 border-[#0a0a0a]">
                        <div className="absolute inset-0 rounded-full bg-[#3a5a40] animate-ping opacity-20" />
                      </div>

                      {/* Content Card */}
                      <motion.div
                           initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.5 }}
                           className={`w-[90%] md:w-[45%] ml-auto md:ml-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                      >
                           <div className="bg-[#111] p-6 md:p-8 rounded-2xl border border-gray-800/50 hover:border-[#3a5a40]/50 transition-all duration-300 group relative text-left" dir="ltr">
                              
                               {/* Achievement Tag - لمسة لينكد إن */}
                               <div className="flex items-center gap-1 text-[10px] font-bold text-[#8b5e3c] uppercase tracking-tighter mb-3">
                                  <Award size={12} /> {exp.highlight}
                               </div>

                               <h3 className="text-xl font-bold text-gray-100 group-hover:text-[#3a5a40] transition-colors">
                                  {exp.title}
                               </h3>
                               
                               <div className="flex flex-wrap items-center gap-4 mt-2 mb-4">
                                 <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                                    <Briefcase size={14} className="text-[#3a5a40]" /> {exp.company}
                                 </div>
                                 <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                    <Calendar size={14} /> {exp.period}
                                 </div>
                               </div>

                               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                  {exp.description}
                               </p>

                               <div className="flex flex-wrap gap-2">
                                  {exp.skills.map((skill) => (
                                      <span key={skill} className="flex items-center gap-1 px-2.5 py-1 bg-[#3a5a40]/5 text-[#3a5a40] text-[10px] font-bold rounded-md border border-[#3a5a40]/10">
                                          <CheckCircle2 size={10} /> {skill}
                                      </span>
                                  ))}
                               </div>
                           </div>
                      </motion.div>
                  </div>
                );
             })}
        </div>
      </div>
    </section>
  );
};

export default Experience;