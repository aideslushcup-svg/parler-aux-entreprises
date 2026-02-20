import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoPlayer from "@/components/VideoPlayer";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesSection from "@/components/FeaturesSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import PricingSection from "@/components/PricingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const Index = () => {
  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <Navbar />
      <main>
        <HeroSection videoUrl={null} />
        <VideoPlayer />
        <ProblemSolution />
        <FeaturesSection />
        <AdditionalServicesSection />
        <PricingSection />
        <IntegrationsSection />
        <FAQSection />
      </main>
      <FooterSection />
    </MotionConfig>
  );
};

export default Index;
