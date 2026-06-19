"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, AdaptiveDpr } from "@react-three/drei";
import OrreryScene from "./OrreryScene";
import StarField from "./StarField";
import { useStore } from "@/lib/useStore";

export default function OrreryCanvas() {
  const { qualityTier } = useStore();
  const dpr: [number, number] =
    qualityTier === "low" ? [0.5, 1] :
    qualityTier === "medium" ? [0.75, 1.5] :
    [1, 2];

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 80, 100], fov: 60, near: 0.5, far: 2000 }}
      gl={{ antialias: qualityTier !== "low", alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <AdaptiveDpr pixelated />

      {/* Duplicate star field inside orrery canvas for depth */}
      <StarField />

      {/* Interactive orrery — click planets to navigate */}
      <OrreryScene interactive />

      {/* Mouse orbit/zoom */}
      <OrbitControls
        target={[0, 0, 0]}
        enablePan={false}
        enableZoom
        zoomSpeed={0.6}
        rotateSpeed={0.5}
        minDistance={20}
        maxDistance={160}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 8}
      />
    </Canvas>
  );
}
