"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useStore } from "@/lib/useStore";

const NEBULA_BLOBS = [
  { pos: [0,   20, -180] as [number,number,number], color: "#0a1050", r: 120 },
  { pos: [-90, -10, -160] as [number,number,number], color: "#1a0840", r: 100 },
  { pos: [ 70,  15, -200] as [number,number,number], color: "#081840", r: 90  },
  { pos: [-30, -40, -140] as [number,number,number], color: "#200a50", r: 80  },
];

const PARTICLE_COUNT = 280;

export default function HomeScene() {
  const { camera } = useThree();
  const { reducedMotion } = useStore();

  // Reset camera to default home position
  useEffect(() => {
    camera.position.set(0, 0, 1);
    (camera as THREE.PerspectiveCamera).fov = 75;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [camera]);

  // Floating particle cloud
  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 200;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 120;
      arr[i * 3 + 2] = -60 - Math.random() * 120;
    }
    return arr;
  }, []);

  const cloudRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!reducedMotion && cloudRef.current) {
      const t = state.clock.elapsedTime;
      cloudRef.current.rotation.y = t * 0.015;
      cloudRef.current.rotation.x = Math.sin(t * 0.008) * 0.04;
    }
  });

  return (
    <group>
      {/* Nebula colour washes — large translucent spheres */}
      {NEBULA_BLOBS.map((blob, i) => (
        <mesh key={i} position={blob.pos} scale={blob.r}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial
            color={blob.color}
            transparent
            opacity={0.035}
            depthWrite={false}
            side={THREE.BackSide}
          />
        </mesh>
      ))}

      {/* Floating dust particles */}
      <points ref={cloudRef}>
        <bufferGeometry>
          <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        </bufferGeometry>
        <pointsMaterial
          size={1.8}
          sizeAttenuation={false}
          color="#8899ff"
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
