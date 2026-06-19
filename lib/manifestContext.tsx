"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Manifest = Record<string, boolean>;
const Ctx = createContext<Manifest>({});

export function ManifestProvider({ children }: { children: React.ReactNode }) {
  const [manifest, setManifest] = useState<Manifest>({});
  useEffect(() => {
    fetch("/asset-manifest.json")
      .then(r => r.json())
      .then(setManifest)
      .catch(() => setManifest({}));
  }, []);
  return <Ctx.Provider value={manifest}>{children}</Ctx.Provider>;
}

export const useManifest = () => useContext(Ctx);
export const useAssetLoaded = (path: string) => !!useManifest()[path];
