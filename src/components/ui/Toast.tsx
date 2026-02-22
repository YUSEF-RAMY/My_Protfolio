import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react'; // الحل الأضمن لـ ESLint
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

// 1. تعريف الأنواع بدقة
type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: string) => void;
}

// 1. تحديد النوع بـ undefined كقيمة افتراضية مسموح بها
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// 2. استخدام Hooks بذكاء مع التأكد من وجود الـ Provider
// eslint-disable-next-line react-refresh/only-export-components
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // 2. إصلاح الـ useCallback ليكون مستقراً تماماً
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // غلق التوست تلقائياً بعد 5 ثواني
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, [removeToast]); // إضافة removeToast هنا ضرورية للـ ESLint

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      
      {/* 3. تعديل الـ Z-index والتنسيق البصري */}
      <div className="fixed top-24 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="pointer-events-auto relative group"
            >
              <div className="bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[300px] max-w-[400px] flex items-start gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* شريط جانبي أنيق ملون حسب النوع */}
                <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${
                  toast.type === 'success' ? 'bg-[#3a5a40]' : 
                  toast.type === 'error' ? 'bg-red-600' : 'bg-[#8b5e3c]'
                }`} />

                <div className="mt-0.5 shrink-0">
                  {toast.type === 'success' && <CheckCircle className="text-[#3a5a40]" size={20} />}
                  {toast.type === 'error' && <XCircle className="text-red-500" size={20} />}
                  {toast.type === 'info' && <Info className="text-[#8b5e3c]" size={20} />}
                </div>

                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-bold text-white mb-0.5">
                    {toast.type === 'success' ? 'Success' : toast.type === 'error' ? 'Error' : 'Notification'}
                  </p>
                  <p className="text-xs text-gray-400 font-medium leading-snug">
                    {toast.message}
                  </p>
                </div>

                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-gray-500 hover:text-white transition-all p-1 rounded-lg hover:bg-white/5"
                >
                  <X size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};