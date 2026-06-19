"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import BODIES from "@/data/bodies";

interface Props {
  slug: string;
}

export default function BodySphere({ slug }: Props) {
  const body = BODIES.find((b) => b.slug === slug);
  const { camera } = useThree();
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef   = useRef<THREE.Mesh>(null);

  const color = body?.identityColor ?? "#888888";
  const isSaturn = slug === "saturn";

  useEffect(() => {
    // Position sphere off-centre-right so it doesn't block the text on the left
    camera.position.set(-2, 2, 9);
    camera.lookAt(2, 0, 0);
    (camera as THREE.PerspectiveCamera).fov = 55;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [camera]);

  useFrame((_, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.18;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.06;
    }
  });

  return (
    <group position={[2, 0, 0]}>
      {/* Key directional light (left of camera = rim light) */}
      <directionalLight
        position={[-8, 5, 6]}
        intensity={2.5}
        color="#ffffff"
        castShadow={false}
      />
      {/* Faint fill from the opposite side */}
      <directionalLight position={[6, -3, -5]} intensity={0.25} color="#8899cc" />
      {/* Very dim ambient */}
      <ambientLight intensity={0.05} />

      {/* Main sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.8, 64, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.08}
          roughness={0.75}
          metalness={0.1}
        />
      </mesh>

      {/* Saturn's ring system */}
      {isSaturn && (
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0.4]}>
          <ringGeometry args={[2.6, 4.4, 128]} />
          <meshStandardMaterial
            color="#d4c07a"
            emissive="#c8a850"
            emissiveIntensity={0.1}
            transparent
            opacity={0.55}
            depthWrite={false}
            side={THREE.DoubleSide}
            roughness={1}
            metalness={0}
          />
        </mesh>
      )}

      {/* Uranus ring */}
      {slug === "uranus" && (
        <mesh rotation={[0.1, 0, Math.PI / 2]}>
          <ringGeometry args={[2.3, 2.6, 64]} />
          <meshBasicMaterial
            color="#7de8e8"
            transparent
            opacity={0.25}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Glow halo — dims out from the lit side */}
      <mesh scale={2.05}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.04}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
