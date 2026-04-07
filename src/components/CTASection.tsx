import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-6">
          Start building something<br />that actually works
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground mb-10">
          Tell us what you are trying to solve. We will help you turn it into a working system.
        </p>
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8 text-base" asChild>
            <a href="#contact">Talk to us</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-border" asChild>
            <a href="#contact">Get started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
