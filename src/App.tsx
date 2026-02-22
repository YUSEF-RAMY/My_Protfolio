import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
// import Contact from './components/sections/Contact';
import { ToastProvider } from './components/ui/Toast';
import emailjs from '@emailjs/browser';


emailjs.init("BV0ubTE9MvHPLFu49");
// ... باقي الـ imports

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme');
        return theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <ToastProvider>
      {/* 1. هنا التعديل: نمرر الحالة للدالة المتحكمة في الشكل العام */}
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        {/* ما تنساش تشيل التعليق عن Contact لما تخلصها */}
        {/* <Contact /> */}
      </Layout>
    </ToastProvider>
  );
}

export default App;

