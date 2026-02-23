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
      color: "bg-[#3a5a40]/10",
      textColor: "text-[#3a5a40]"
    },
    { 
      icon: Phone, 
      title: "Call Me", 
      value: "+20 1095132780", 
      href: "tel:+201095132780",
      color: "bg-[#3a5a40]/10",
      textColor: "text-[#3a5a40]"
    },
    { 
      icon: Linkedin, 
      title: "LinkedIn", 
      value: "yusef-ramy", 
      href: "https://www.linkedin.com/in/yusef-ramy",
      color: "bg-[#3a5a40]/10",
      textColor: "text-[#3a5a40]"
    },
    { 
      icon: Github, 
      title: "GitHub", 
      value: "YUSEF-RAMY", 
      href: "https://github.com/YUSEF-RAMY",
      color: "bg-[#3a5a40]/10",
      textColor: "text-[#3a5a40]"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* الـ Glows - نظفنا الألوان عشان متبقاش مصفره */}
      {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#3a5a40]/15 blur-[120px] rounded-full" /> */}
      {/* <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#2d6a4f]/10 blur-[120px] rounded-full" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Get in Touch" subtitle="I'm always open to discussing new projects or creative opportunities." />

        <div className="max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* كروت التواصل */}
            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group bg-[#111]/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-[#3a5a40]/30 transition-all duration-500"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 ${item.color} rounded-xl flex items-center justify-center ${item.textColor} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-gray-100 font-bold text-sm md:text-lg truncate">{item.value}</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-700 group-hover:text-[#3a5a40] transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* الجانب التفاعلي - التعديل الجوهري هنا لضمان الظهور في الفون */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111]/40 backdrop-blur-md rounded-4xl border border-white/5 p-2 flex flex-col overflow-hidden min-h-95 md:min-h-full"
            >
              <div className="relative flex-1 bg-black/40 rounded-[1.8rem] overflow-hidden group flex items-center justify-center">
                 {/* خلفية منقطة شيك */}
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3a5a40_1.5px,transparent_1.5px)] bg-size-[25px_25px]" />
                 
                 <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                    <div className="relative mb-6">
                        {/* النبض اللي حوالين اللوكيشن */}
                        <motion.div 
                          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-[#3a5a40] rounded-full blur-xl"
                        />
                        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-[#0a0a0a] rounded-full flex items-center justify-center text-[#3a5a40] border border-[#3a5a40]/30 shadow-2xl">
                           <MapPin size={32} />
                        </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Cairo, Egypt</h3>
                    <p className="text-gray-400 leading-relaxed max-w-65 text-sm md:text-base mb-8">
                       Available for remote work worldwide and local roles in Egypt.
                    </p>
                    
                    {/* جزء الوقت - خليناه Button شيك */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="px-6 py-3 bg-[#3a5a40]/10 border border-[#3a5a40]/20 text-[#3a5a40] rounded-full font-bold text-xs tracking-widest uppercase flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#3a5a40] rounded-full animate-pulse" />
                      09:00 AM - 06:00 PM
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