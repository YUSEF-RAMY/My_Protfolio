import React, { type ReactNode } from 'react';

// 1. تحديث الـ Interface ليشمل الـ props الجديدة
interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = ({ children, darkMode, setDarkMode }: LayoutProps) => {
  return (
    // 1. استخدام darkMode هنا بيشيل أول خطأ
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300`}>
      
      {/* 2. تجربة استخدام setDarkMode في زرار بسيط عشان تقفل الخطأ */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="fixed top-4 right-4 z-[50] p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <main>{children}</main>
    </div>
  );
};

export default Layout;