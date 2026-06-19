import type { Metadata } from "next";
import SpaceWeatherPage from "@/components/pages/SpaceWeatherPage";

export const metadata: Metadata = {
  title: "Space Weather",
  description: "Solar activity, geomagnetic storms, Kp index, aurora forecasts, and the space environment between the Sun and Earth.",
};

export default function Page() {
  return <SpaceWeatherPage />;
}
