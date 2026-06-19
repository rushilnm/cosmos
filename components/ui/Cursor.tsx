"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const cur = useRef({ x: -100, y: -100 });
  const lag = useRef({ x: -100, y: -100 });
  const raf = useRef(0);

  useEffect(() => {
    // Only show custom cursor on devices with a fine pointer
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => { cur.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      lag.current.x += (cur.current.x - lag.current.x) * 0.12;
      lag.current.y += (cur.current.y - lag.current.y) * 0.12;
      if (dot.current) dot.current.style.transform = `translate(${cur.current.x - 4}px,${cur.current.y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${lag.current.x - 20}px,${lag.current.y - 20}px)`;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="fixed top-0 left-0 z-[99999] pointer-events-none w-2 h-2 rounded-full bg-white mix-blend-difference" aria-hidden="true" />
      <div ref={ring} className="fixed top-0 left-0 z-[99999] pointer-events-none w-10 h-10 rounded-full border border-white/50 mix-blend-difference" aria-hidden="true" />
    </>
  );
}
