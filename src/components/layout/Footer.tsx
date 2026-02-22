import { Github, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          {/* الاسم بالثيم الجديد */}
          <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5c4033] to-[#3a5a40] inline-block">
            Yousef Ramy
          </div>
          
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Architecting robust backend systems and cloud-native solutions. 
            Let's build the next generation of scalable applications.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: Github, href: "https://github.com/YUSEF-RAMY" }, // تأكد من تعديل الروابط لليوزرات الجديدة لو اتغيرت
              { icon: Linkedin, href: "https://www.linkedin.com/in/yusef-ramy" },
              { icon: Facebook, href: "https://www.facebook.com/YusefRamy14/" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#8b5e3c' }} // اللون البني عند التحويم
                className="text-gray-500 hover:text-[#3a5a40] transition-colors p-2"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-xs text-gray-600 tracking-widest uppercase">
            &copy; {currentYear} Yousef Ramy. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;