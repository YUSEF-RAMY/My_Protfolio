import { motion } from 'framer-motion'; 
import { Code, Server, Cloud, Database, Cpu } from 'lucide-react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const services = [
  {
    icon: Server, // أيقونة السيرفر للباك إند
    title: "Backend Engineering",
    description: "Architecting robust and scalable server-side solutions using Laravel, focusing on security and high-performance APIs."
  },
  {
    icon: Cloud, // أيقونة الكلاود
    title: "Cloud Infrastructure",
    description: "Designing and deploying cloud-native applications on AWS and Huawei Cloud with a focus on high availability."
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications, bridging the gap between elegant React UIs and complex backend logic."
  },
  {
    icon: Cpu, // أيقونة المعالج للذكاء الاصطناعي
    title: "AI & System Integration",
    description: "Integrating intelligent features like Eye-Recognition and AI models into seamless, real-world business workflows."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionHeading title="Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-none bg-[#111] hover:bg-[#161616] transition-all group p-8 rounded-2xl">
              {/* Icon Container - تعديل الألوان هنا للبني والزيتي */}
              <div className="w-14 h-14 bg-[#3a5a40]/20 rounded-xl flex items-center justify-center mb-6 text-[#3a5a40] group-hover:bg-[#5c4033] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#1a2f1a]/20">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-[#8b5e3c] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;