import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const skills = [
  { name: "PHP & Laravel", level: 95 },
  { name: "Cloud Computing (AWS / Huawei)", level: 90 },
  { name: "MySQL & Database Design", level: 90 },
  { name: "React.js & Tailwind CSS & Livewire", level: 85 },
  { name: "RESTful API Development", level: 95 },
  { name: "Linux & DevOps Basics", level: 80 },
];

const Skills = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Stack" 
          subtitle="A blend of Backend architecture and Cloud engineering" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-200">{skill.name}</span>
                <span className="text-[#8b5e3c] font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  // التدرج هنا من البني الدافئ للأخضر الزيتي
                  className="h-full bg-gradient-to-r from-[#5c4033] to-[#3a5a40] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;