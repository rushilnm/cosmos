import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
  if (lenis) return lenis;

  gsap.registerPlugin(ScrollTrigger);

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
  });

  // Keep GSAP ScrollTrigger in sync with Lenis scroll position
  lenis.on("scroll", ScrollTrigger.update);

  // Drive Lenis from GSAP's ticker so they share the same rAF
  gsap.ticker.add((time) => { lenis?.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function getLenis(): Lenis | null { return lenis; }
