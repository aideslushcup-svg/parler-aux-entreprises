import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoPlayer from "@/components/VideoPlayer";
import ProblemSolution from "@/components/ProblemSolution";
import GlobeSection from "@/components/GlobeSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection videoUrl={null} />
        <VideoPlayer />
        <ProblemSolution />
        <GlobeSection />
        <FeaturesSection />
        <PricingSection />
        <IntegrationsSection />
        <FAQSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
