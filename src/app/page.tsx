import { BuildSection } from "@/components/BuildSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ManagementSection } from "@/components/ManagementSection";
import { NewsSection } from "@/components/NewsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { StatsSection } from "@/components/StatsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { VisionSection } from "@/components/VisionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <BuildSection />
        <VisionSection />
        <PortfolioSection />
        <TimelineSection />
        <StatsSection />
        <ManagementSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
