/**
 * Renders a visible, labeled placeholder for any missing asset.
 * Always shows on-screen text — never blank, never broken.
 */
interface Props {
  id: number;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: "image" | "video" | "audio" | "texture";
}

const icons: Record<string, string> = {
  image: "🖼",
  video: "▶",
  audio: "🎧",
  texture: "⬡",
};

export default function AssetPlaceholder({ id, label, className = "", style, variant = "image" }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-yellow-500/40 bg-yellow-500/5 ${className}`}
      style={style}
      aria-label={`Placeholder for ${label}`}
      role="img"
    >
      <span className="text-3xl opacity-50" aria-hidden="true">{icons[variant] ?? "📦"}</span>
      <div className="text-center px-4">
        <div className="text-yellow-400 font-mono text-sm font-semibold">#{id}</div>
        <div className="text-yellow-200/60 text-xs mt-1 leading-relaxed">{label}</div>
      </div>
    </div>
  );
}
