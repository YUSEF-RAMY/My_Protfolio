import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import CustomCursor from './components/layout/CustomCursor'; // رجعنا الكيرسور
import ScrollProgress from './components/layout/ScrollProgress'; // رجعنا شريط التحميل
import { ToastProvider } from './components/ui/Toast';
import emailjs from '@emailjs/browser';

emailjs.init("BV0ubTE9MvHPLFu49");

function App() {
  // إجبار الموقع على الـ Dark Mode دايماً
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ToastProvider>
      {/* 1. الكيرسور بيتحط بره الـ Layout عشان يغطي الشاشة كلها */}
      <CustomCursor />
      
      <Layout>
        {/* 2. شريط التحميل بيبقى تحت الناف بار مباشرة */}
        <Navbar />
        <ScrollProgress /> 
        
        <main>
          <Hero />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </Layout>
    </ToastProvider>
  );
}

export default App;