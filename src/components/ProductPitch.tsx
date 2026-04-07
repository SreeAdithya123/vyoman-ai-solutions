import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Fit into your existing workflow",
  "Learn from your data",
  "Improve speed and decision making",
  "Deliver measurable business outcomes",
];

const ProductPitch = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-6">
          From idea to working AI,<br />without the complexity
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          You do not need to figure out tools, models, or infrastructure.
          We design, build, and deploy AI systems that:
        </p>

        <div className="reveal reveal-delay-2 grid sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50 glow-card"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">{b}</span>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 mt-8 text-sm text-muted-foreground">
          Everything is handled end to end by one team.
        </p>
      </div>
    </section>
  );
};

export default ProductPitch;
