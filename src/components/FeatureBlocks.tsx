import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronRight } from "lucide-react";

const features = [
  "We build custom products and SaaS platforms tailored exactly to how your business runs",
  "We solve real operational problems using smart, practical technology",
  "We create tools that save time, reduce costs, and open new revenue opportunities",
  "We help you scale faster with solutions that grow with your business",
];

const FeatureBlocks = () => {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
          We turn your business problems<br />into growth engines.
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground mb-12">
          We do <strong className="text-foreground">product development and SaaS</strong> that solve your biggest challenges and help your business grow.
        </p>

        <div className="space-y-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300`}
            >
              <ChevronRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform duration-300" />
              <span className="text-foreground">{f}</span>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-4 text-sm text-muted-foreground mt-8 text-center">
          Every project is designed to deliver measurable growth — not just features.
        </p>
      </div>
    </section>
  );
};

export default FeatureBlocks;
