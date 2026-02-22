import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

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

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {/* مكان الـ Toast وتوزيعه */}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="pointer-events-auto relative group overflow-hidden"
            >
              <div className="bg-[#0f0f0f]/90 backdrop-blur-xl border border-gray-800 rounded-xl p-4 min-w-[320px] max-w-[400px] flex items-start gap-4 shadow-2xl">
                {/* شريط جانبي ملون حسب النوع */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  toast.type === 'success' ? 'bg-[#3a5a40]' : 
                  toast.type === 'error' ? 'bg-red-900' : 'bg-[#5c4033]'
                }`} />

                <div className="mt-0.5 shrink-0">
                  {toast.type === 'success' && <CheckCircle className="text-[#3a5a40]" size={22} />}
                  {toast.type === 'error' && <XCircle className="text-red-600" size={22} />}
                  {toast.type === 'info' && <Info className="text-[#8b5e3c]" size={22} />}
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-100 mb-1">
                    {toast.type === 'success' ? 'Success' : toast.type === 'error' ? 'Error' : 'Notification'}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    {toast.message}
                  </p>
                </div>

                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-gray-600 hover:text-gray-300 transition-colors p-1"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};