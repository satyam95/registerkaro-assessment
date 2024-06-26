import AboutSection from "@/components/Sections/AboutSection";
import BlogSection from "@/components/Sections/BlogSection";
import Clients from "@/components/Sections/Clients";
import ClientsSection from "@/components/Sections/ClientsSection";
import CounterBlock from "@/components/Sections/CounterBlock";
import ExploreSection from "@/components/Sections/ExploreSection";
import Faq from "@/components/Sections/Faq";
import HeroSection from "@/components/Sections/HeroSection";
import MobileAppPlugin from "@/components/Sections/MobileAppPlugin";
import NewsletterCTA from "@/components/Sections/NewsletterCTA";
import USPBanner from "@/components/Sections/USPBanner";
import VideoIntroduction from "@/components/Sections/VideoIntroduction";
import WhyChoose from "@/components/Sections/WhyChoose";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExploreSection />
      <AboutSection />
      <WhyChoose />
      <VideoIntroduction />
      <ClientsSection />
      <USPBanner />
      <BlogSection />
      <Faq />
      <MobileAppPlugin />
      <CounterBlock />
      <NewsletterCTA />
      <Clients />
    </main>
  );
}
