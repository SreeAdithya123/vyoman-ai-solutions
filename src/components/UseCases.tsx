import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const cases = [
  "Automate repetitive operations and reduce manual work",
  "Predict trends, demand, and outcomes using your data",
  "Build internal tools that your team actually uses",
  "Create intelligent products for your customers",
  "Improve learning, training, and performance systems",
];

const UseCases = () => {
  const ref = useScrollReveal();

  return (
    <section id="use-cases" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-14">
          AI applied where it<br />actually matters
        </h2>

        <div className="space-y-4">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex items-center gap-4 p-5 rounded-lg border border-border bg-card/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 cursor-default`}
            >
              <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="text-foreground">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
