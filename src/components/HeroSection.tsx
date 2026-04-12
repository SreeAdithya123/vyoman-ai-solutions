import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 45%, hsl(0 0% 20% / 0.5), transparent 70%),
            radial-gradient(ellipse 80% 50% at 50% 50%, hsl(0 0% 12% / 0.4), transparent 80%)
          `,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(0 0% 100% / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 100% / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: `radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)`,
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
        <p className="reveal flex items-center justify-center gap-2.5 text-[13px] font-medium tracking-wide text-muted-foreground mb-10">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          <span className="px-4 py-1.5 rounded-full border border-border">Small enough to care. Skilled enough to deliver.</span>
        </p>

        <h1 className="reveal reveal-delay-1 text-[clamp(2rem,8vw,5.5rem)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-8">
          <span className="hero-glow-text">Your Business Doesn't</span>
          <br />
          <span className="hero-glow-text">Need Another Tech Demo.</span>
          <br />
          <span className="hero-glow-text-muted text-[clamp(1.5rem,5vw,3.5rem)]">It Needs Products That Actually Grow Your Business.</span>
        </h1>

        <p className="reveal reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          <strong className="text-foreground">Vyoman AI Solutions</strong> builds custom products and SaaS platforms for Indian businesses.
          We solve your real problems, create tools your team loves, and help you grow — faster and smarter.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base gap-2" asChild>
            <a href="#contact">Book a Free Strategy Call <ArrowRight className="w-4 h-4" /></a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full px-8 text-base border-border hover:bg-secondary"
            asChild
          >
            <a href="#use-cases">See What We Build</a>
          </Button>
        </div>

        <div className="reveal reveal-delay-4 mt-20">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Government-Registered MSME</span>
            <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Nidadavole, Andhra Pradesh</span>
            <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> UDYAM: AP-12-0115093</span>
            <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Built for Indian Businesses</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
