import type { Metadata } from "next";
import { Source_Serif_4, Inconsolata } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/css/index.css";
import Header from "@/components/header";
import NoiseOverlay from "@/components/noise-overlay";
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

export const metadata: Metadata = {
  title: "Uare.ai",
  description: "Uare.ai — join the waitlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${futura.variable} ${sourceSerif4.variable} ${inconsolata.variable} uareai h-full antialiased`}
    >
      <body className="relative z-0 flex min-h-full flex-col font-sans">
        <Header />
        {children}
        <TextureOverlay />
        <NoiseOverlay />
      </body>
    </html>
  );
}
