"use client";

import { motion } from "framer-motion";
import QuizEngine from "@/components/quiz/QuizEngine";
import GlassPanel from "@/components/ui/GlassPanel";

export default function QuizHub() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <section className="text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-bold text-white mb-4"
          >
            Space Quizzes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-white/65 max-w-xl mx-auto"
          >
            Put your cosmic knowledge to the test across {40} questions spanning the solar system,
            space exploration, and astronomy.
          </motion.p>
        </section>

        {/* Quiz engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassPanel className="p-6 sm:p-8">
            <QuizEngine />
          </GlassPanel>
        </motion.div>

        {/* Tips */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-white/25 text-sm mt-8"
        >
          Questions are shuffled each time. Read explanations to learn as you go.
        </motion.p>

      </div>
    </main>
  );
}
