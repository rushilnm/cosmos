import type { Metadata } from "next";
import ExoplanetDataPage from "@/components/pages/ExoplanetDataPage";

export const metadata: Metadata = {
  title: "Exoplanet Catalog",
  description: "Browse the NASA Exoplanet Archive — over 5,700 confirmed worlds orbiting other stars.",
};

export default function Page() {
  return <ExoplanetDataPage />;
}
