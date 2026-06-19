"use client";

import { useEffect } from "react";
import { initLenis } from "./lenis";
import { setStore } from "./store";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth scroll (no-op if reducedMotion, Lenis checks internally)
    initLenis();

    // Reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setStore({ reducedMotion: mq.matches });
    const onMqChange = (e: MediaQueryListEvent) => setStore({ reducedMotion: e.matches });
    mq.addEventListener("change", onMqChange);

    // Quality tier — rough heuristic: CPU cores + deviceMemory
    const cores = navigator.hardwareConcurrency ?? 4;
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    if (cores <= 2 || mem <= 2) setStore({ qualityTier: "low" });
    else if (cores <= 4 || mem <= 4) setStore({ qualityTier: "medium" });
    // else: stays "high" (default in store)

    return () => mq.removeEventListener("change", onMqChange);
  }, []);

  return <>{children}</>;
}
