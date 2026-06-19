"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import BODIES from "@/data/bodies";
import { useStore } from "@/lib/useStore";
import { setStore } from "@/lib/store";

// Visual orbit radii chosen for aesthetics, not true AU scale
const PLANET_VIS: Record<string, { orbitR: number; planetR: number }> = {
  mercury: { orbitR:  7,  planetR: 0.22 },
  venus:   { orbitR: 10,  planetR: 0.34 },
  earth:   { orbitR: 14,  planetR: 0.36 },
  mars:    { orbitR: 18,  planetR: 0.26 },
  jupiter: { orbitR: 27,  planetR: 1.10 },
  saturn:  { orbitR: 36,  planetR: 0.90 },
  uranus:  { orbitR: 44,  planetR: 0.65 },
  neptune: { orbitR: 52,  planetR: 0.62 },
};

// Earth completes one orbit in 20 real seconds
const EARTH_OMEGA = (2 * Math.PI) / 20;
function omega(periodDays: number) {
  return EARTH_OMEGA * (365.25 / periodDays);
}

const planets = BODIES.filter((b) => b.type === "planet");

// ── Flat orbit ring on XZ plane ──────────────────────────────────────────────
function OrbitRing({ radius }: { radius: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 128]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.07}
        depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

// ── Single animated planet ───────────────────────────────────────────────────
function OrreryPlanet({
  slug, name, color, orbitR, planetR, periodDays, initialAngle, interactive,
}: {
  slug: string; name: string; color: string;
  orbitR: number; planetR: number; periodDays: number;
  initialAngle: number; interactive: boolean;
}) {
  const { reducedMotion } = useStore();
  const groupRef  = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const matRef    = useRef<THREE.MeshStandardMaterial>(null);
  const angleRef  = useRef(initialAngle);
  const speed     = omega(periodDays);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!interactive) return;
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => { document.body.style.cursor = "auto"; };
  }, [hovered, interactive]);

  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      angleRef.current += speed * delta;
      groupRef.current.position.x = Math.cos(angleRef.current) * orbitR;
      groupRef.current.position.z = Math.sin(angleRef.current) * orbitR;
    }
    if (sphereRef.current && !reducedMotion) {
      sphereRef.current.rotation.y += delta * 0.4;
    }
    // Smooth emissive pulse on hover
    if (matRef.current) {
      const target = hovered ? 0.55 : 0.12;
      matRef.current.emissiveIntensity +=
        (target - matRef.current.emissiveIntensity) * 0.12;
    }
  });

  return (
    <>
      <OrbitRing radius={orbitR} />
      <group ref={groupRef} position={[orbitR, 0, 0]}>
        <mesh
          ref={sphereRef}
          onPointerOver={interactive ? (e) => { e.stopPropagation(); setHovered(true); } : undefined}
          onPointerOut={interactive ? () => setHovered(false) : undefined}
          onClick={interactive ? (e) => { e.stopPropagation(); setStore({ navigateTo: `/body/${slug}` }); } : undefined}
        >
          <sphereGeometry args={[planetR, 32, 16]} />
          <meshStandardMaterial ref={matRef} color={color} emissive={color}
            emissiveIntensity={0.12} roughness={0.85} metalness={0.05} />
        </mesh>

        {slug === "saturn" && (
          <mesh rotation={[Math.PI / 3, 0, 0.3]}>
            <ringGeometry args={[planetR * 1.5, planetR * 2.4, 64]} />
            <meshBasicMaterial color="#d4c07a" transparent opacity={0.45}
              depthWrite={false} side={THREE.DoubleSide} />
          </mesh>
        )}

        {interactive && hovered && (
          <Html center distanceFactor={20} zIndexRange={[0, 0]}>
            <div style={{
              background: "rgba(2,6,28,0.92)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "3px 10px", borderRadius: 6,
              fontSize: 11, color: "#fff",
              whiteSpace: "nowrap", pointerEvents: "none",
              backdropFilter: "blur(8px)", letterSpacing: "0.08em",
            }}>
              {name}
            </div>
          </Html>
        )}
      </group>
    </>
  );
}

// ── Glowing Sun ──────────────────────────────────────────────────────────────
function OrrSun({ interactive }: { interactive: boolean }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef  = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    if (!interactive) return;
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => { document.body.style.cursor = "auto"; };
  }, [hovered, interactive]);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.08;
    if (matRef.current) {
      const target = hovered ? 1.8 : 1.2;
      matRef.current.emissiveIntensity += (target - matRef.current.emissiveIntensity) * 0.1;
    }
  });

  return (
    <group>
      <pointLight color="#fff7e0" intensity={4} distance={200} decay={1.5} />
      <mesh scale={3.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#ffaa22" transparent opacity={0.06}
          depthWrite={false} side={THREE.BackSide} />
      </mesh>
      <mesh
        ref={meshRef}
        onPointerOver={interactive ? (e) => { e.stopPropagation(); setHovered(true); } : undefined}
        onPointerOut={interactive ? () => setHovered(false) : undefined}
        onClick={interactive ? (e) => { e.stopPropagation(); setStore({ navigateTo: "/body/sun" }); } : undefined}
      >
        <sphereGeometry args={[2.6, 40, 20]} />
        <meshStandardMaterial ref={matRef} color="#ffcc44" emissive="#ff8800"
          emissiveIntensity={1.2} roughness={1} metalness={0} />
      </mesh>
      {interactive && hovered && (
        <Html center distanceFactor={20} zIndexRange={[0, 0]}>
          <div style={{
            background: "rgba(2,6,28,0.92)",
            border: "1px solid rgba(255,200,0,0.3)",
            padding: "3px 10px", borderRadius: 6,
            fontSize: 11, color: "#ffdd88",
            whiteSpace: "nowrap", pointerEvents: "none",
            backdropFilter: "blur(8px)", letterSpacing: "0.08em",
          }}>
            The Sun
          </div>
        </Html>
      )}
    </group>
  );
}

// ── Scene root ───────────────────────────────────────────────────────────────
export default function OrreryScene({ interactive = false }: { interactive?: boolean }) {
  const initialAngles = useMemo(() => planets.map(() => Math.random() * Math.PI * 2), []);

  return (
    <group>
      <ambientLight intensity={0.08} color="#2233aa" />
      <OrrSun interactive={interactive} />
      {planets.map((body, i) => {
        const vis = PLANET_VIS[body.slug];
        if (!vis) return null;
        return (
          <OrreryPlanet
            key={body.slug}
            slug={body.slug}
            name={body.name}
            color={body.identityColor}
            orbitR={vis.orbitR}
            planetR={vis.planetR}
            periodDays={body.orbitData.periodDays}
            initialAngle={initialAngles[i]}
            interactive={interactive}
          />
        );
      })}
    </group>
  );
}
