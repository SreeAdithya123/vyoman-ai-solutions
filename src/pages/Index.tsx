import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductPitch from "@/components/ProductPitch";
import FeatureBlocks from "@/components/FeatureBlocks";
import UseCases from "@/components/UseCases";
import WhyVyoman from "@/components/WhyVyoman";
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
      <WhyVyoman />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
