import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoPlayer from "@/components/VideoPlayer";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoPlayer videoUrl={null} />
        <ProblemSolution />
        <HowItWorks />
        <PricingSection />
        <IntegrationsSection />
        <FAQSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
