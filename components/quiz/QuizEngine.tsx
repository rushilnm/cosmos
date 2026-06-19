"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QUIZ_QUESTIONS,
  CATEGORY_LABELS,
  type QuizCategory,
  type QuizQuestion,
} from "@/data/quiz";
import GlassPanel from "@/components/ui/GlassPanel";

// ── Fisher-Yates shuffle ──────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

type Phase = "lobby" | "playing" | "reviewing" | "results";

interface GameState {
  phase: Phase;
  questions: QuizQuestion[];
  currentIdx: number;
  selected: number | null;
  score: number;
}

const QUESTION_COUNTS = [10, 20, 40] as const;
type QuestionCount = typeof QUESTION_COUNTS[number];

const STAR_THRESHOLDS = [
  { min: 0.8, stars: 3, label: "Outstanding!" },
  { min: 0.6, stars: 2, label: "Great work!" },
  { min: 0.4, stars: 1, label: "Good effort!" },
  { min: 0,   stars: 0, label: "Keep exploring!" },
];

function getResult(score: number, total: number) {
  const pct = score / total;
  return STAR_THRESHOLDS.find((t) => pct >= t.min)!;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function CategoryChip({
  id, label, active, onClick,
}: {
  id: QuizCategory | "all"; label: string; active: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
        active
          ? "bg-blue-500/25 border-blue-400/50 text-blue-200"
          : "bg-white/5 border-white/10 text-white/45 hover:border-white/25 hover:text-white/70"
      }`}
    >
      {label}
    </button>
  );
}

function OptionButton({
  text, index, selected, correct, revealed, onSelect,
}: {
  text: string; index: number; selected: boolean; correct: boolean;
  revealed: boolean; onSelect: () => void;
}) {
  let bg    = "rgba(8,12,40,0.6)";
  let border = "rgba(255,255,255,0.1)";
  let color  = "rgba(255,255,255,0.8)";

  if (revealed) {
    if (correct) {
      bg     = "rgba(68,200,130,0.18)";
      border = "rgba(68,200,130,0.6)";
      color  = "#88ddaa";
    } else if (selected && !correct) {
      bg     = "rgba(220,60,80,0.18)";
      border = "rgba(220,60,80,0.5)";
      color  = "#ee8899";
    } else {
      color  = "rgba(255,255,255,0.3)";
      border = "rgba(255,255,255,0.05)";
    }
  }

  const labels = ["A", "B", "C", "D"];

  return (
    <motion.button
      whileTap={revealed ? {} : { scale: 0.985 }}
      onClick={revealed ? undefined : onSelect}
      disabled={revealed}
      className="w-full text-left rounded-xl border px-4 py-3.5 flex gap-3 items-start transition-colors"
      style={{ background: bg, borderColor: border, color, cursor: revealed ? "default" : "pointer" }}
      aria-pressed={selected}
    >
      <span
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
        style={{
          background: revealed && correct ? "#44c882" : revealed && selected ? "#dc3c50" : "rgba(255,255,255,0.1)",
          color: revealed ? "white" : "rgba(255,255,255,0.5)",
        }}
      >
        {labels[index]}
      </span>
      <span className="flex-1 leading-relaxed text-sm">{text}</span>
      {revealed && correct && <span className="text-green-400 mt-0.5" aria-label="Correct">✓</span>}
      {revealed && selected && !correct && <span className="text-red-400 mt-0.5" aria-label="Incorrect">✗</span>}
    </motion.button>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function QuizEngine() {
  const [activeCategory, setCategory] = useState<QuizCategory | "all">("all");
  const [count, setCount]             = useState<QuestionCount>(10);
  const [game, setGame]               = useState<GameState>({
    phase: "lobby", questions: [], currentIdx: 0, selected: null, score: 0,
  });

  const filteredPool = useMemo(() => {
    if (activeCategory === "all") return QUIZ_QUESTIONS;
    return QUIZ_QUESTIONS.filter((q) => q.category === activeCategory);
  }, [activeCategory]);

  function startQuiz() {
    const questions = shuffle(filteredPool).slice(0, count);
    setGame({ phase: "playing", questions, currentIdx: 0, selected: null, score: 0 });
  }

  function selectAnswer(idx: number) {
    if (game.phase !== "playing") return;
    const q         = game.questions[game.currentIdx]!;
    const correct   = idx === q.correctIndex;
    setGame((g) => ({
      ...g,
      phase:    "reviewing",
      selected: idx,
      score:    correct ? g.score + 1 : g.score,
    }));
  }

  function nextQuestion() {
    const nextIdx = game.currentIdx + 1;
    if (nextIdx >= game.questions.length) {
      setGame((g) => ({ ...g, phase: "results" }));
    } else {
      setGame((g) => ({ ...g, phase: "playing", currentIdx: nextIdx, selected: null }));
    }
  }

  function backToLobby() {
    setGame({ phase: "lobby", questions: [], currentIdx: 0, selected: null, score: 0 });
  }

  // ── Lobby ────────────────────────────────────────────────────────────────────
  if (game.phase === "lobby") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Category filter */}
        <section>
          <p className="text-xs text-white/35 uppercase tracking-widest mb-3">Filter by category</p>
          <div className="flex flex-wrap gap-2">
            <CategoryChip id="all" label="All topics" active={activeCategory === "all"}
              onClick={() => setCategory("all")} />
            {(Object.keys(CATEGORY_LABELS) as QuizCategory[]).map((cat) => (
              <CategoryChip key={cat} id={cat} label={CATEGORY_LABELS[cat]}
                active={activeCategory === cat} onClick={() => setCategory(cat)} />
            ))}
          </div>
        </section>

        {/* Question count */}
        <section>
          <p className="text-xs text-white/35 uppercase tracking-widest mb-3">How many questions?</p>
          <div className="flex gap-2">
            {QUESTION_COUNTS.filter((c) => c <= filteredPool.length).map((c) => (
              <button
                key={c}
                onClick={() => setCount(c)}
                aria-pressed={count === c}
                className={`px-5 py-2 rounded-xl border text-sm transition-all ${
                  count === c
                    ? "bg-blue-500/25 border-blue-400/50 text-blue-200"
                    : "bg-white/5 border-white/10 text-white/45 hover:border-white/25"
                }`}
              >
                {c === filteredPool.length ? `All ${c}` : c}
              </button>
            ))}
          </div>
          <p className="text-white/25 text-xs mt-2">
            {filteredPool.length} questions available in selected {activeCategory === "all" ? "categories" : "category"}.
          </p>
        </section>

        {/* Start button */}
        <div>
          <button
            onClick={startQuiz}
            disabled={filteredPool.length === 0}
            className="px-8 py-3.5 rounded-xl text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Start Quiz →
          </button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/8">
          {(Object.keys(CATEGORY_LABELS) as QuizCategory[]).map((cat) => {
            const n = QUIZ_QUESTIONS.filter((q) => q.category === cat).length;
            return (
              <div key={cat} className="text-center">
                <p className="text-lg font-bold text-white">{n}</p>
                <p className="text-[10px] text-white/30 leading-tight">{CATEGORY_LABELS[cat]}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // ── Results ──────────────────────────────────────────────────────────────────
  if (game.phase === "results") {
    const { stars, label } = getResult(game.score, game.questions.length);
    const pct = Math.round((game.score / game.questions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 py-4"
      >
        <div>
          <p className="text-6xl mb-4">{"⭐".repeat(stars)}{stars < 3 ? "☆".repeat(3 - stars) : ""}</p>
          <h2 className="text-3xl font-bold text-white mb-2">{label}</h2>
          <p className="text-white/50">
            You scored{" "}
            <span className="text-white font-semibold">{game.score}</span>
            {" "}out of{" "}
            <span className="text-white font-semibold">{game.questions.length}</span>
            {" "}({pct}%)
          </p>
        </div>

        {/* Score bar */}
        <div className="max-w-xs mx-auto">
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: pct >= 80 ? "#44cc88" : pct >= 60 ? "#ccaa44" : "#cc4466",
              }}
            />
          </div>
        </div>

        {/* Encouragement */}
        <GlassPanel className="p-5 max-w-sm mx-auto text-left">
          <p className="text-white/60 text-sm leading-relaxed">
            {pct >= 80
              ? "You clearly have excellent space knowledge. Try a different category to challenge yourself further."
              : pct >= 60
              ? "Solid performance! Explore the bodies and topics pages to fill in any gaps."
              : pct >= 40
              ? "Good start! The solar system has a lot to discover — dig into the body pages for more facts."
              : "Everyone starts somewhere. Explore the site, then come back and try again — you'll surprise yourself."}
          </p>
        </GlassPanel>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={startQuiz}
            className="px-6 py-3 rounded-xl text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={backToLobby}
            className="px-6 py-3 rounded-xl text-sm text-white/60 border border-white/15 hover:text-white hover:border-white/30 transition-colors"
          >
            Change Settings
          </button>
        </div>
      </motion.div>
    );
  }

  // ── Playing / Reviewing ──────────────────────────────────────────────────────
  const q         = game.questions[game.currentIdx]!;
  const revealed  = game.phase === "reviewing";
  const progress  = ((game.currentIdx + (revealed ? 1 : 0)) / game.questions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress bar + meta */}
      <div>
        <div className="flex items-center justify-between text-xs text-white/35 mb-2">
          <span>Question {game.currentIdx + 1} of {game.questions.length}</span>
          <span>{game.score} correct</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-400 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-[10px] text-white/25 mt-1.5 capitalize">
          {CATEGORY_LABELS[q.category]}
        </p>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-white text-lg font-medium leading-relaxed mb-5">
            {q.question}
          </h2>

          <div className="space-y-2.5">
            {q.options.map((opt, i) => (
              <OptionButton
                key={i}
                text={opt}
                index={i}
                selected={game.selected === i}
                correct={i === q.correctIndex}
                revealed={revealed}
                onSelect={() => selectAnswer(i)}
              />
            ))}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="mt-4 rounded-xl border border-white/10 p-4"
                style={{ background: "rgba(60,80,180,0.12)" }}
              >
                <p className="text-xs text-blue-300/60 uppercase tracking-widest mb-1">Explanation</p>
                <p className="text-white/70 text-sm leading-relaxed">{q.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Next / Finish button */}
      {revealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3"
        >
          <button
            onClick={nextQuestion}
            className="px-6 py-3 rounded-xl text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white transition-colors"
          >
            {game.currentIdx + 1 >= game.questions.length ? "See Results →" : "Next Question →"}
          </button>
          <button
            onClick={backToLobby}
            className="px-4 py-3 rounded-xl text-sm text-white/40 border border-white/10 hover:text-white/70 transition-colors"
          >
            Quit
          </button>
        </motion.div>
      )}
    </div>
  );
}
