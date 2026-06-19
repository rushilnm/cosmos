import { type ReactNode, type CSSProperties } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glow?: string;
  as?: keyof JSX.IntrinsicElements;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  role?: string;
}

export default function GlassPanel({
  children,
  className = "",
  style,
  glow,
  as: Tag = "div",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  role,
}: GlassPanelProps) {
  const glowStyle = glow
    ? { boxShadow: `0 0 40px ${glow}25, 0 0 1px ${glow}60, inset 0 1px 0 rgba(255,255,255,0.07)` }
    : { boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)" };

  return (
    // @ts-expect-error — polymorphic tag
    <Tag
      className={`rounded-2xl border border-white/10 ${className}`}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      role={role}
      style={{
        background: "rgba(8,12,40,0.55)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        ...glowStyle,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
