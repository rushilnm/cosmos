"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setStore } from "@/lib/store";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(id);
          setTimeout(() => {
            setVisible(false);
            setStore({ isLoading: false });
          }, 400);
          return 100;
        }
        return p + Math.random() * 14;
      });
    }, 100);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: "#00000a" }}
          aria-live="polite"
          aria-label={`Loading COSMOS, ${Math.floor(progress)}%`}
        >
          {/* Particle field */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 2 + 0.5 + "px",
                  height: Math.random() * 2 + 0.5 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.6 + 0.1,
                  animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
                  animationDelay: Math.random() * 3 + "s",
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 relative z-10"
          >
            <p className="text-[10px] tracking-[0.5em] text-blue-400/60 uppercase mb-4">
              Your guide to the universe
            </p>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.4em] text-white">
              COSMOS
            </h1>
            <div className="w-32 h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 w-56"
          >
            <div className="h-px bg-white/8 w-full rounded overflow-hidden">
              <div
                className="h-px bg-gradient-to-r from-blue-500 to-cyan-400 rounded transition-all duration-100"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-mono text-white/30">
              <span>INITIALISING</span>
              <span>{Math.floor(Math.min(progress, 100))}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
