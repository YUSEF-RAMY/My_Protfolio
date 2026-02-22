import { useEffect, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  // تأكد أن هذا الكود يعمل داخل بيئة المتصفح فقط (Client-side)
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* الـ Backdrop - تعتيم الخلفية مع Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ref={overlayRef}
            onClick={handleOverlayClick}
          />

          {/* محتوى الـ Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-[#0d0d0d] border border-gray-800 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-4xl max-h-[85vh] overflow-hidden"
          >
            {/* زر الإغلاق - بلمسة الزيتي */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1a1a1a] text-gray-400 hover:text-[#3a5a40] border border-gray-800 hover:border-[#3a5a40]/50 transition-all z-50 group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* الحاوية الداخلية مع Scrollbar مخفي أو شيك */}
            <div className="overflow-y-auto max-h-[85vh] scrollbar-thin scrollbar-thumb-[#3a5a40] scrollbar-track-transparent">
              {children}
            </div>
            
            {/* إضاءة خفيفة في أسفل الـ Modal لتعزيز العمق */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#3a5a40]/5 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;