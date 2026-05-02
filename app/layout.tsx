import type { Metadata } from "next";
import {
  Anton,
  Archivo_Black,
  Bebas_Neue,
  DM_Serif_Display,
  Fraunces,
  Inconsolata,
  Oswald,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Source_Serif_4,
} from "next/font/google";
import localFont from "next/font/local";
import "@/styles/css/index.css";
import AmbientSoundToggle from "@/components/ambient-sound-toggle";
import Header from "@/components/header";
import IssueTicker from "@/components/issue-ticker";
import NoiseOverlay from "@/components/noise-overlay";
import ScrollNotice from "@/components/scroll-notice";
import SmoothScroll from "@/components/smooth-scroll";
import TextureOverlay from "@/components/texture-overlay";

const futura = localFont({
  src: "./fonts/Futura-Extra-Bold.woff",
  variable: "--font-futura",
  weight: "800",
  style: "normal",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

// Heading-only alternates exposed via the dev controller. Each one is loaded
// at the single weight the heading actually renders at — keeps the bundle
// lean and avoids browser-simulated bolding on non-variable fonts.
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: "600",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: "800",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "700",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: "600",
});

// Update SITE_URL to match the deployed origin so OG/canonical URLs resolve correctly.
const SITE_URL = "https://www.uare.ai";
const SITE_NAME = "Uare.ai";
const SITE_TAGLINE = "Authentic over Artificial";
const SITE_DESCRIPTION =
  "Human-first AI for brands and creators who refuse to fake it. Join the Uare.ai waitlist — Issue 01, April 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Uare.ai",
    "human-first AI",
    "AI for brands",
    "AI for creators",
    "authentic AI",
    "AI waitlist",
    "personal AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    creator: "@uareai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${futura.variable} ${sourceSerif4.variable} ${inconsolata.variable} ${bebasNeue.variable} ${oswald.variable} ${anton.variable} ${archivoBlack.variable} ${playfairDisplay.variable} ${fraunces.variable} ${dmSerifDisplay.variable} ${plusJakartaSans.variable} uareai h-full antialiased`}
    >
      <body className="relative z-0 flex min-h-full flex-col font-sans">
        <SmoothScroll>
          <IssueTicker />
          <Header />
          {children}
          <TextureOverlay />
          <NoiseOverlay />
          <AmbientSoundToggle />
          <ScrollNotice />
        </SmoothScroll>
      </body>
    </html>
  );
}
