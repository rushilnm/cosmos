import type { Metadata } from "next";
import AsteroidDataPage from "@/components/pages/AsteroidDataPage";

export const metadata: Metadata = {
  title: "Asteroid Tracker",
  description: "Near-Earth objects, close-approach dates, sizes, and velocities — tracked by NASA's Center for Near Earth Object Studies.",
};

export default function Page() {
  return <AsteroidDataPage />;
}
