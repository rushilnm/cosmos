import type { Metadata } from "next";
import SkyPage from "@/components/pages/SkyPage";

export const metadata: Metadata = {
  title: "Planetarium",
  description: "Real-time interactive sky map — stars, planets, and constellations at their true positions for any time and place on Earth.",
};

export default function Page() {
  return <SkyPage />;
}
