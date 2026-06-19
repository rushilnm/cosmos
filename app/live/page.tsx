import type { Metadata } from "next";
import LivePage from "@/components/pages/LivePage";

export const metadata: Metadata = {
  title: "Live Dashboard",
  description: "Real-time space data: ISS position, Moon phase, space weather, planet visibility, and today's Astronomy Picture of the Day.",
};

export default function Page() {
  return <LivePage />;
}
