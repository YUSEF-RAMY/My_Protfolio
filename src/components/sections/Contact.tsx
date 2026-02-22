import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  const contactMethods = [
    { 
      icon: Mail, 
      title: "Email Me", 
      value: "yuseframy14@gmail.com", 
      href: "mailto:yuseframy14@gmail.com",
      color: "bg-blue-500/10",
      textColor: "text-blue-400"
    },
    { 
      icon: Phone, 
      title: "Call Me", 
      value: "+20 1095132780", 
      href: "tel:+201095132780",
      color: "bg-green-500/10",
      textColor: "text-green-400"
    },
    { 
      icon: Linkedin, 
      title: "LinkedIn", 
      value: "yusef-ramy", 
      href: "https://www.linkedin.com/in/yusef-ramy",
      color: "bg-blue-600/10",
      textColor: "text-blue-500"
    },
    { 
      icon: Github, 
      title: "GitHub", 
      value: "YUSEF-RAMY", 
      href: "https://github.com/YUSEF-RAMY",
      color: "bg-gray-500/10",
      textColor: "text-gray-400"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* الخلفية الجمالية */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#3a5a40]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#5c4033]/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Get in Touch" subtitle="I'm always open to discussing new projects or creative opportunities." />

        <div className="max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* كروت التواصل */}
            <div className="grid grid-cols-1 gap-6">
              {contactMethods.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-[#111]/40 backdrop-blur-md p-6 rounded-3xl border border-white/5 flex items-center gap-6 hover:border-[#3a5a40]/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(58,90,64,0.2)]"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center ${item.textColor} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-400 text-sm font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-100 font-bold text-lg">{item.value}</p>
                  </div>
                  <ExternalLink size={18} className="text-gray-600 group-hover:text-[#3a5a40] transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* الجانب التفاعلي: الخريطة أو رسالة ترحيبية */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#111]/40 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-1 flex flex-col overflow-hidden"
            >
              <div className="relative flex-1 bg-black/40 rounded-[2.3rem] overflow-hidden group">
                 {/* الأنيميشن الخاص بالخريطة */}
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3a5a40_1px,transparent_1px)] bg-size-[20px_20px]" />
                 
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="relative mb-6">
                        <motion.div 
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-[#3a5a40] rounded-full blur-xl"
                        />
                        <div className="relative w-20 h-20 bg-[#3a5a40]/20 rounded-full flex items-center justify-center text-[#3a5a40] border border-[#3a5a40]/30">
                           <MapPin size={32} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Based in Cairo, Egypt</h3>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                       Available for remote work worldwide and local opportunities in Egypt.
                    </p>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-8 py-3 bg-[#3a5a40] text-white rounded-full font-bold shadow-lg shadow-[#3a5a40]/20 cursor-default"
                    >
                      Working Hours: 09:00 AM - 06:00 PM
                    </motion.div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;