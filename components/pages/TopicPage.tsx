"use client";

import Link from "next/link";
import { type Topic } from "@/data/topics";
import TOPICS from "@/data/topics";
import BODIES from "@/data/bodies";
import GlassPanel from "@/components/ui/GlassPanel";
import AssetPlaceholder from "@/components/ui/AssetPlaceholder";
import DepthTierSelector from "@/components/ui/DepthTierSelector";
import { useStore } from "@/lib/useStore";

interface Props {
  topic: Topic;
}

export default function TopicPage({ topic }: Props) {
  const { depthTier } = useStore();
  const relatedBodies = BODIES.filter((b) => topic.relatedSlugs.includes(b.slug));
  const relatedTopics = TOPICS.filter((t) => topic.relatedTopicSlugs.includes(t.slug));

  return (
    <main className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <div
        className="w-full py-20 px-4 mb-12 relative"
        style={{ background: `linear-gradient(135deg, ${topic.color}33 0%, transparent 70%)` }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-white/40 mb-2">Topic</p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ color: topic.color === "#0a0a1e" ? "#ffffff" : topic.color }}
          >
            {topic.title}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-6">{topic.subtitle}</p>
          <DepthTierSelector />
        </div>
        <div className="absolute right-8 top-8 opacity-50">
          <AssetPlaceholder
            id={topic.heroAssetId}
            label={`${topic.title} hero image`}
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 grid gap-8">
        {/* Intro paragraph */}
        <GlassPanel as="section" className="p-6" aria-label="Introduction">
          <p className="text-white/80 leading-relaxed text-sm md:text-base">
            {topic.intro[depthTier]}
          </p>
        </GlassPanel>

        {/* Article sections */}
        {topic.sections.map((section, i) => (
          <GlassPanel key={i} as="section" className="p-6" aria-label={section.heading}>
            <h2 className="text-xl font-semibold text-white mb-4">{section.heading}</h2>
            <p className="text-white/75 leading-relaxed text-sm md:text-base">
              {section.body[depthTier]}
            </p>
          </GlassPanel>
        ))}

        {/* Related worlds */}
        {relatedBodies.length > 0 && (
          <section aria-label="Related celestial bodies">
            <h2 className="text-xl font-semibold text-white mb-4">Related Worlds</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedBodies.map((body) => (
                <Link
                  key={body.slug}
                  href={`/body/${body.slug}`}
                  className="block group focus-visible:outline-none"
                >
                  <GlassPanel
                    as="article"
                    className="p-4 group-hover:border-white/30 group-focus-visible:ring-2 group-focus-visible:ring-white/60 transition-all"
                  >
                    <div
                      className="w-8 h-8 rounded-full mb-2"
                      style={{ background: body.identityColor }}
                      aria-hidden
                    />
                    <p className="text-white text-sm font-medium">{body.name}</p>
                    <p className="text-white/40 text-xs capitalize">
                      {body.type.replace("-", " ")}
                    </p>
                  </GlassPanel>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related topics */}
        {relatedTopics.length > 0 && (
          <section aria-label="Related topics">
            <h2 className="text-xl font-semibold text-white mb-4">Related Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTopics.map((t) => (
                <Link
                  key={t.slug}
                  href={`/topics/${t.slug}`}
                  className="block group focus-visible:outline-none"
                >
                  <GlassPanel
                    as="article"
                    className="p-4 flex gap-4 items-center group-hover:border-white/30 group-focus-visible:ring-2 group-focus-visible:ring-white/60 transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex-shrink-0"
                      style={{ background: t.color + "55" }}
                      aria-hidden
                    />
                    <div>
                      <p className="text-white font-medium">{t.title}</p>
                      <p className="text-white/50 text-xs line-clamp-1">{t.subtitle}</p>
                    </div>
                  </GlassPanel>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
