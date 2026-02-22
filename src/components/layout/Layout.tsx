import React, { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';
import BackToTop from '../ui/BackToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    /* تعديل الخلفية لتكون #0a0a0a (الأسود العميق) بدلاً من bg-light/dark العادية
       وتوحيد لون النص ليكون رمادي فاتح مريح للعين 
    */
    <div className="min-h-screen font-sans text-gray-300 bg-[#0a0a0a] selection:bg-[#3a5a40]/30 selection:text-[#8b5e3c] transition-colors duration-300">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;