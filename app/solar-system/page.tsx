import type { Metadata } from "next";
import SolarSystemPage from "@/components/pages/SolarSystemPage";

export const metadata: Metadata = {
  title: "Solar System",
  description: "An interactive 3D orrery — explore all eight planets, dwarf planets, and the Sun.",
};

export default function Page() {
  return <SolarSystemPage />;
}
