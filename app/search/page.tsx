import type { Metadata } from "next";
import SearchPage from "@/components/pages/SearchPage";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across all planets, topics, and glossary terms.",
};

export default function Page() { return <SearchPage />; }
