import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <p className="reveal text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
          Built for teams that want results, not experiments
        </p>

        <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-gradient">AI that actually works</span>
          <br />
          <span className="text-gradient">for your business</span>
        </h1>

        <p className="reveal reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Most AI looks good in demos.
          We build AI that performs in real operations — with your data, your workflows, and your goals.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button size="lg" className="rounded-full px-8 text-base" asChild>
            <a href="#contact">Start a conversation</a>
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

        <div className="reveal reveal-delay-4 mt-16 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <span className="px-3 py-1.5 rounded-full border border-border bg-secondary/50">MSME Registered</span>
          <span className="px-3 py-1.5 rounded-full border border-border bg-secondary/50">Government Recognized</span>
          <span className="px-3 py-1.5 rounded-full border border-border bg-secondary/50">UDYAM-AP-12-0115093</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
