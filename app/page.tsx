import HeroSection from "@/components/hero-section";
import ScrollNotice from "@/components/scroll-notice";
import SiteShell from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ScrollNotice />
    </SiteShell>
  );
}
