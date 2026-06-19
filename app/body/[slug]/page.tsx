import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BODIES from "@/data/bodies";
import BodyPage from "@/components/pages/BodyPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BODIES.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const body = BODIES.find(b => b.slug === slug);
  if (!body) return { title: "Not Found" };
  return {
    title: body.name,
    description: body.oneLineHook,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const body = BODIES.find(b => b.slug === slug);
  if (!body) notFound();
  return <BodyPage body={body} />;
}
