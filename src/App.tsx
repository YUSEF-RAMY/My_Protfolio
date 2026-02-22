import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact'; // فكيناه عشان يشتغل
import { ToastProvider } from './components/ui/Toast';
import emailjs from '@emailjs/browser';

emailjs.init("BV0ubTE9MvHPLFu49");

function App() {
  // 1. إجبار الموقع إنه يفتح Dark Mode دايماً أول ما يحمل
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ToastProvider>
      {/* 2. شيلنا الـ Props اللي كانت بتعمل صداع */}
      <Layout>
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact /> 
      </Layout>
    </ToastProvider>
  );
}

export default App;