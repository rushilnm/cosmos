import type { Metadata } from "next";
import ToolsHub from "@/components/pages/ToolsHub";

export const metadata: Metadata = {
  title: "Interactive Tools",
  description: "Weight calculator, size comparison, light-travel timer, meteor-shower calendar, and more.",
};

export default function Page() { return <ToolsHub />; }
