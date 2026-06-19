import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TOPICS from "@/data/topics";
import TopicPage from "@/components/pages/TopicPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOPICS.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = TOPICS.find(t => t.slug === slug);
  if (!topic) return { title: "Not Found" };
  return { title: topic.title, description: topic.subtitle };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const topic = TOPICS.find(t => t.slug === slug);
  if (!topic) notFound();
  return <TopicPage topic={topic} />;
}
