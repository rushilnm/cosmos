import type { Metadata } from "next";
import "./globals.css";
import { ManifestProvider } from "@/lib/manifestContext";
import Navigation from "@/components/ui/Navigation";
import PlaceholderOverlay from "@/components/ui/PlaceholderOverlay";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Cursor from "@/components/ui/Cursor";
import CommandPalette from "@/components/ui/CommandPalette";
import SpaceBackground from "@/lib/SpaceBackground";
import LenisProvider from "@/lib/LenisProvider";

export const metadata: Metadata = {
  title: { default: "COSMOS — Your Guide to the Universe", template: "%s | COSMOS" },
  description: "The best beginner's guide to space. Explore planets, stars, galaxies, and the universe with stunning 3D visuals and clear explanations for all ages.",
  keywords: ["space", "astronomy", "planets", "solar system", "stars", "NASA", "education"],
  openGraph: {
    siteName: "COSMOS",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#00000a] text-[#f0f0f8] antialiased">
        {/* Accessibility: skip-to-content */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <ManifestProvider>
          <LenisProvider>

            {/* Persistent 3D canvas background */}
            <SpaceBackground />

            <LoadingScreen />
            <Navigation />

            <main id="main-content" tabIndex={-1} className="outline-none">
              {children}
            </main>

            {/* Command palette — global, Cmd+K */}
            <CommandPalette />

            <PlaceholderOverlay />
            <Cursor />

          </LenisProvider>
        </ManifestProvider>
      </body>
    </html>
  );
}
