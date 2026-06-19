"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useStore } from "@/lib/useStore";

const MAX = 5;

interface MeteorState {
  sx: number; sy: number; sz: number;
  ex: number; ey: number; ez: number;
  t: number;
  duration: number;
}

function spawnMeteor(): MeteorState {
  const phi   = Math.random() * Math.PI * 0.6;
  const theta = Math.random() * Math.PI * 2;
  const r     = 180 + Math.random() * 120;
  const sx = r * Math.sin(phi) * Math.cos(theta);
  const sy = r * Math.cos(phi) + 40;
  const sz = r * Math.sin(phi) * Math.sin(theta);
  const len = 35 + Math.random() * 55;
  const ex  = sx + (Math.random() - 0.5) * len;
  const ey  = sy - len * (0.5 + Math.random() * 0.5);
  const ez  = sz + (Math.random() - 0.5) * len * 0.4;
  return { sx, sy, sz, ex, ey, ez, t: Math.random(), duration: 1.8 + Math.random() * 2.5 };
}

export default function MeteorSystem() {
  const { reducedMotion } = useStore();
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const states  = useRef<MeteorState[]>(Array.from({ length: MAX }, spawnMeteor));
  const dummy   = useMemo(() => new THREE.Object3D(), []);
  const _dir    = useMemo(() => new THREE.Vector3(), []);
  const _yAxis  = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    const mesh = meshRef.current;
    if (!mesh) return;

    states.current.forEach((m, i) => {
      m.t += delta / m.duration;
      if (m.t >= 1) Object.assign(m, spawnMeteor());

      const t = m.t;
      const px = m.sx + (m.ex - m.sx) * t;
      const py = m.sy + (m.ey - m.sy) * t;
      const pz = m.sz + (m.ez - m.sz) * t;

      _dir.set(m.ex - m.sx, m.ey - m.sy, m.ez - m.sz).normalize();
      dummy.position.set(px, py, pz);
      dummy.quaternion.setFromUnitVectors(_yAxis, _dir);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      // Fade in / fade out — peak at t=0.5
      const opacity = 1 - Math.abs(t * 2 - 1);
      if (mesh.instanceColor) {
        mesh.instanceColor.setXYZ(i, opacity, opacity, opacity);
        mesh.instanceColor.needsUpdate = true;
      }
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, MAX]}>
      {/* Tapered cylinder: wide at head, thin at tail */}
      <cylinderGeometry args={[0.025, 0.005, 12, 4, 1]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.7} depthWrite={false} />
    </instancedMesh>
  );
}
