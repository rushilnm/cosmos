import type { Metadata } from "next";
import ApodPage from "@/components/pages/ApodPage";

export const metadata: Metadata = {
  title: "Astronomy Picture of the Day",
  description: "NASA's daily astronomy image — one stunning photo or video every day since 1995, with explanation by a professional astronomer.",
};

export default function Page() {
  return <ApodPage />;
}
