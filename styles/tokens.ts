/**
 * COSMOS design tokens — single source of truth for colors, spacing, type.
 * Used in Tailwind config extensions and directly in component styles.
 */

export const colors = {
  // Deep space backgrounds
  void: "#00000a",
  deepSpace: "#020614",
  nebulaDark: "#060822",

  // Cosmic accents
  starWhite: "#f8f8ff",
  cosmicBlue: "#4488ff",
  nebulaViolet: "#8844cc",
  solarGold: "#ffcc44",
  marsRed: "#c1440e",
  iceBlue: "#80e0ff",

  // Glass UI
  glassBg: "rgba(8, 12, 40, 0.55)",
  glassBorder: "rgba(255, 255, 255, 0.10)",
  glassHighlight: "rgba(255, 255, 255, 0.04)",

  // Text
  textPrimary: "#f0f0f8",
  textSecondary: "rgba(220,224,255,0.65)",
  textMuted: "rgba(160,168,220,0.45)",

  // Semantic
  success: "#44cc88",
  warning: "#ffaa33",
  danger: "#ff4455",
} as const;

export const fonts = {
  display: '"Space Grotesk", "Inter", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", "Fira Code", monospace',
} as const;

export const radii = {
  sm: "6px",
  md: "12px",
  lg: "20px",
  xl: "28px",
  pill: "9999px",
} as const;

export const shadows = {
  glass: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
  glow: (color: string) => `0 0 40px ${color}40, 0 0 80px ${color}20`,
  card: "0 4px 24px rgba(0,0,0,0.6)",
} as const;

export const transitions = {
  fast: "150ms cubic-bezier(0.4,0,0.2,1)",
  normal: "300ms cubic-bezier(0.4,0,0.2,1)",
  slow: "600ms cubic-bezier(0.16,1,0.3,1)",
  spring: "500ms cubic-bezier(0.34,1.56,0.64,1)",
} as const;
