"use client";

import { Suspense } from "react";
import { useStore } from "@/lib/useStore";
import HomeScene from "./HomeScene";
import BodySphere from "./BodySphere";

/**
 * Renders page-specific 3D content inside the persistent background canvas.
 * The solar-system orrery lives in its own OrreryCanvas (in SolarSystemPage)
 * so it can be interactive — it is NOT rendered here.
 */
export default function PageSceneManager() {
  const { currentScene, activeBodySlug } = useStore();

  return (
    <Suspense fallback={null}>
      {currentScene === "home" && <HomeScene />}
      {currentScene === "body" && activeBodySlug && (
        <BodySphere slug={activeBodySlug} />
      )}
    </Suspense>
  );
}
