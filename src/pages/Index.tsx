import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import ProductPitch from "@/components/ProductPitch";
import FeatureBlocks from "@/components/FeatureBlocks";
import UseCases from "@/components/UseCases";
import Services from "@/components/Services";
import Differentiation from "@/components/Differentiation";
import WhyVyoman from "@/components/WhyVyoman";
import Philosophy from "@/components/Philosophy";
import TaglineStrip from "@/components/TaglineStrip";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SocialProofStrip />
      <ProductPitch />
      <FeatureBlocks />
      <UseCases />
      <Services />
      <Differentiation />
      <WhyVyoman />
      <Philosophy />
      <TaglineStrip />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
