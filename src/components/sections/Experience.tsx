import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const experiences = [
  {
    title: "Full-Stack Web Development Trainee",
    company: "ITI (Information Technology Institute)",
    period: "2024 - Present",
    description: "Intensive 150-hour program focusing on PHP Laravel framework, MySQL database design, and building professional enterprise-grade applications.",
    skills: ["Laravel", "MySQL", "PHP", "Bootstrap"]
  },
  {
    title: "Cloud Computing Essentials Graduate",
    company: "NTI (National Telecommunication Institute)",
    period: "2024",
    description: "Completed 120 hours of training in Cloud Infrastructure. Achieved a final score of 97% in cloud environment management and networking.",
    skills: ["Cloud Computing", "Networking", "Linux", "Infrastructure"]
  },
  {
    title: "AWS Academy Graduate",
    company: "AWS Academy",
    period: "2024",
    description: "Focused on AWS Cloud Foundations and Architecting. Skilled in deploying scalable and secure services on Amazon Web Services.",
    skills: ["AWS", "EC2", "S3", "Cloud Security"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Learning Path & Experience" />

        <div className="relative max-w-4xl mx-auto mt-16">
            {/* Timeline Line - تغيير اللون للزيتي الداكن */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#3a5a40]/30 rounded-full" />

             {experiences.map((exp, index) => (
                <div key={index} className={`relative mb-12 flex flex-col md:flex-row items-center justify-between w-full`}>
                    <div className="hidden md:block w-5/12" />
                    
                    {/* Dot - تغيير اللون للزيتي */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3a5a40] rounded-full z-10 border-4 border-[#0a0a0a] shadow-sm" />

                    <motion.div
                         initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: index * 0.2 }}
                         className={`w-full md:w-5/12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-first md:text-right'}`}
                    >
                         <div className={`bg-[#111] p-6 rounded-xl shadow-md hover:shadow-[#3a5a40]/10 transition-shadow border border-gray-800 relative group`}>
                            {/* Arrow */}
                            <div className={`hidden md:block absolute top-6 w-4 h-4 bg-[#111] border-t border-l border-gray-800 transform rotate-45 ${index % 2 === 0 ? '-left-2' : '-right-2'}`} />

                             <h3 className="text-xl font-bold text-gray-100 group-hover:text-[#8b5e3c] transition-colors">
                                {exp.title}
                             </h3>
                             <div className="flex items-center gap-2 text-[#3a5a40] font-medium mb-2 text-sm md:text-base md:justify-start">
                                <Briefcase size={16} /> {exp.company}
                             </div>
                             <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 md:justify-start">
                                <Calendar size={16} /> {exp.period}
                             </div>
                             <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                {exp.description}
                             </p>
                             <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`}>
                                {exp.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-[#3a5a40]/10 text-[#3a5a40] text-xs rounded-full border border-[#3a5a40]/20">
                                        {skill}
                                    </span>
                                ))}
                             </div>
                         </div>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;