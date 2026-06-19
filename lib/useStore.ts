"use client";
import { useState, useEffect } from "react";
import { getStore, subscribeStore, type CosmosStore } from "./store";

export function useStore(): CosmosStore {
  const [s, setS] = useState<CosmosStore>(getStore);
  useEffect(() => subscribeStore(next => setS({ ...next })), []);
  return s;
}
