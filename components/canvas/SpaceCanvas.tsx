"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import StarField from "./StarField";
import MeteorSystem from "./MeteorSystem";
import PageSceneManager from "./PageSceneManager";
import { useStore } from "@/lib/useStore";

export default function SpaceCanvas() {
  const { qualityTier } = useStore();

  const dpr: [number, number] =
    qualityTier === "low" ? [0.5, 1] :
    qualityTier === "medium" ? [0.75, 1.5] :
    [1, 2];

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 2000 }}
      gl={{
        antialias: qualityTier !== "low",
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* Always-on background */}
      <StarField />
      <MeteorSystem />

      {/* Page-specific 3D scene */}
      <PageSceneManager />
    </Canvas>
  );
}
