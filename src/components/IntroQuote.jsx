import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroQuote({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide after 4.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  function handleComplete() {
    setIsVisible(false);
    setTimeout(onComplete, 800); // Allow fade-out animation to finish
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFFDFE] px-6 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.15)_0%,transparent_60%)] blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-text-dark leading-[1.2] drop-shadow-md"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              "Beauty begins the moment you decide to be yourself."
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="mt-8 text-lg text-primary font-bold tracking-widest uppercase drop-shadow-sm"
            >
              — Coco Chanel
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            onClick={handleComplete}
            className="absolute bottom-10 right-10 px-7 py-3 rounded-full border border-primary/20 text-text-muted text-sm font-semibold hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-pointer glass"
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
