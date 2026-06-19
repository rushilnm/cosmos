"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useStore } from "@/lib/useStore";

const COUNTS: Record<string, number> = { high: 12000, medium: 7000, low: 3000 };

export default function StarField() {
  const { qualityTier, reducedMotion } = useStore();
  const count = COUNTS[qualityTier] ?? 7000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 250 + Math.random() * 500;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.y += delta * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        sizeAttenuation={false}
        color="#ffffff"
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}
