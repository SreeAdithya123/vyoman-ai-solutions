import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductPitch from "@/components/ProductPitch";
import FeatureBlocks from "@/components/FeatureBlocks";
import UseCases from "@/components/UseCases";
import Differentiation from "@/components/Differentiation";
import WhyVyoman from "@/components/WhyVyoman";
import Philosophy from "@/components/Philosophy";

import TaglineStrip from "@/components/TaglineStrip";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProductPitch />
      <FeatureBlocks />
      <UseCases />
      <Differentiation />
      <WhyVyoman />
      <Philosophy />
      
      <TaglineStrip />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
