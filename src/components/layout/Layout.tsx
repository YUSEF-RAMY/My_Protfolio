import React from 'react';

// 1. تحديث الـ Interface ليشمل الـ props الجديدة
// كود الـ Layout.tsx الجديد
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // ثبتنا الـ class dark هنا أو سيبناها تعتمد على الـ App.tsx
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main>{children}</main>
    </div>
  );
};

export default Layout;