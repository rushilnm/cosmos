import type { Metadata } from "next";
import GlossaryPage from "@/components/pages/GlossaryPage";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Plain-language definitions of every space term you'll encounter on COSMOS.",
};

export default function Page() { return <GlossaryPage />; }
