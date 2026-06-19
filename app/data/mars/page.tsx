import type { Metadata } from "next";
import MarsDataPage from "@/components/pages/MarsDataPage";

export const metadata: Metadata = {
  title: "Mars Explorer",
  description: "Live rover photos, Mars weather data, and mission status from NASA Perseverance, Curiosity, and past rovers.",
};

export default function Page() {
  return <MarsDataPage />;
}
