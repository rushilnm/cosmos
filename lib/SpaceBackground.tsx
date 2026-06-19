"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setStore } from "@/lib/store";
import { useStore } from "@/lib/useStore";

const SpaceCanvas = dynamic(() => import("@/components/canvas/SpaceCanvas"), { ssr: false });

/** Keeps store.currentScene in sync with the Next.js router. */
function SceneSyncer() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setStore({ currentScene: "home", activeBodySlug: null });
    } else if (pathname === "/solar-system") {
      setStore({ currentScene: "solar-system", activeBodySlug: null });
    } else if (pathname.startsWith("/body/")) {
      const slug = pathname.split("/")[2] ?? null;
      setStore({ currentScene: "body", activeBodySlug: slug });
    } else {
      setStore({ currentScene: "other", activeBodySlug: null });
    }
  }, [pathname]);
  return null;
}

/**
 * Watches store.navigateTo (written by canvas click handlers) and drives
 * Next.js router — decouples the R3F canvas from the router context.
 */
function RouterSyncer() {
  const router = useRouter();
  const { navigateTo } = useStore();
  useEffect(() => {
    if (navigateTo) {
      router.push(navigateTo);
      setStore({ navigateTo: null });
    }
  }, [navigateTo, router]);
  return null;
}

export default function SpaceBackground() {
  return (
    <>
      <SceneSyncer />
      <RouterSyncer />
      {/* Fixed full-screen canvas behind all page content */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at center bottom, #060818 0%, #00000a 70%)" }}
      >
        <SpaceCanvas />
      </div>
    </>
  );
}
