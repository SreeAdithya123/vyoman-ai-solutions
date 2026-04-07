import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 45%, hsl(0 0% 20% / 0.5), transparent 70%),
            radial-gradient(ellipse 80% 50% at 50% 50%, hsl(0 0% 12% / 0.4), transparent 80%)
          `,
        }}
      />

      {/* Grid overlay — fading from center outward */}
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

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <p className="reveal flex items-center justify-center gap-2.5 text-[13px] font-medium tracking-wide text-muted-foreground mb-10">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          <span className="px-4 py-1.5 rounded-full border border-border">Built for teams that want results, not experiments</span>
        </p>

        <h1 className="reveal reveal-delay-1 text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-8">
          <span className="hero-glow-text whitespace-nowrap">AI that actually works</span>
          <br />
          <span className="hero-glow-text-muted">for your business</span>
        </h1>

        <p className="reveal reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Most AI looks good in demos.
          We build AI that performs in real operations with your data, your workflows, and your goals.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button size="lg" className="rounded-full px-8 text-base gap-2" asChild>
            <a href="#contact">Start a conversation <ArrowRight className="w-4 h-4" /></a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-base border-border hover:bg-secondary"
            asChild
          >
            <a href="#use-cases">See what we build</a>
          </Button>
        </div>

        <div className="reveal reveal-delay-4 mt-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Trust & Credentials
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>MSME Registered</span>
            <span className="text-border">•</span>
            <span>Government Recognized</span>
            <span className="text-border">•</span>
            <span>UDYAM-AP-12-0115093</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
