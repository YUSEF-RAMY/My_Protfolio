import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../ui/SectionHeading';
import { useToast } from '../ui/Toast';

const Contact = () => {
  const { addToast } = useToast();
  
  // 1. تحديد النوع HTMLFormElement يحل مشكلة الـ TypeScript في الصورة
  const formRef = useRef<HTMLFormElement>(null); 
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    // 2. الربط المباشر مع البيانات الدقيقة من صورك
    emailjs.sendForm(
      'service_n60cttj',  // Service ID من صورتك
      'template_hqdw3wj', // Template ID من صورتك
      formRef.current, 
      'BV0ubTE9MvHPLFu49' // Public Key بتاعك
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        setIsSubmitting(false);
        setIsSuccess(true);
        addToast('Message Sent! Check your email.', 'success');
        
        // 3. علامة الاستفهام هنا تحمي الكود من الـ Crash
        formRef.current?.reset(); 
        
        setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch((error) => {
        console.error('FAILED...', error);
        setIsSubmitting(false);
        addToast('Failed to send. Check console or dashboard.', 'error');
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Get in Touch" subtitle="Let's build something exceptional" />

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto mt-12">
          
          {/* الجانب الأيسر: معلومات التواصل */}
          <div className="lg:w-1/2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                    { icon: Mail, title: "Email", value: "youseframy14@gmail.com", href: "mailto:youseframy14@gmail.com" },
                    { icon: Phone, title: "Phone", value: "+20 123 456 7890", href: "tel:+201234567890" },
                    { icon: MapPin, title: "Location", value: "Cairo, Egypt", href: "#" }
                 ].map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#111]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 flex flex-col items-center text-center group hover:border-[#3a5a40]/50 transition-all shadow-xl"
                    >
                        <div className="w-12 h-12 bg-[#3a5a40]/10 rounded-full flex items-center justify-center text-[#3a5a40] mb-4 group-hover:bg-[#3a5a40] group-hover:text-white transition-all duration-300">
                            <item.icon size={24} />
                        </div>
                        <h4 className="font-bold text-gray-100 mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.value}</p>
                    </motion.a>
                 ))}
            </div>

            {/* الخريطة الأنيميشن */}
            <div className="bg-[#111] rounded-2xl overflow-hidden h-64 md:h-80 shadow-2xl relative border border-gray-800">
                 <div className="absolute inset-0 bg-black grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(10,1fr)] opacity-20">
                     {[...Array(200)].map((_, i) => (
                         <div key={i} className="border-[0.5px] border-[#3a5a40]/10" />
                     ))}
                 </div>
                 <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#8b5e3c]">
                    <motion.div 
                        animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-20 h-20 bg-[#3a5a40]/30 rounded-full -top-10 -left-10"
                    />
                    <MapPin size={48} fill="currentColor" className="relative z-10 drop-shadow-[0_0_10px_rgba(139,94,60,0.5)]" />
                 </motion.div>
            </div>
          </div>

          {/* الجانب الأيمن: الفورم (الأسماء name متطابقة مع التمبلت) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-[#111]/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-800 relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-100 flex items-center gap-3">
               Send me a message
               <span className="h-1 w-12 bg-[#3a5a40] rounded-full" />
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Name</label>
                    <input 
                        name="name" // يطابق {{name}} في صورتك
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:ring-2 focus:ring-[#3a5a40] outline-none transition-all text-white placeholder:text-gray-700"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Email</label>
                    <input 
                        name="email" // يطابق {{email}} في صورتك
                        type="email" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:ring-2 focus:ring-[#3a5a40] outline-none transition-all text-white placeholder:text-gray-700"
                        placeholder="your@email.com"
                    />
                </div>
                
                {/* حقل مخفي للعنوان كما في صورتك */}
                <input type="hidden" name="title" value="Portfolio Message" />

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Message</label>
                    <textarea 
                        name="message" // يطابق {{message}} في صورتك
                        required
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:ring-2 focus:ring-[#3a5a40] outline-none transition-all resize-none text-white placeholder:text-gray-700"
                        placeholder="How can I help you?"
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#5c4033] to-[#3a5a40] text-white rounded-xl font-bold shadow-xl hover:shadow-[#3a5a40]/20 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3 group"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={20} /> Sending...
                        </>
                    ) : isSuccess ? (
                        "Message Delivered! 🎉"
                    ) : (
                        <>
                            Send Message 
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;