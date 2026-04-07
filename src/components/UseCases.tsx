import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronRight } from "lucide-react";

const cases = [
  "Automate repetitive operations and reduce manual work",
  "Predict trends, demand, and outcomes using your data",
  "Build internal tools that your team actually uses",
  "Create intelligent products for your customers",
  "Improve learning, training, and performance systems",
];

const services = [
  "Custom AI systems built for your business",
  "SaaS platforms designed around your workflow",
  "AI powered tools and internal products",
  "Consulting, integration, and deployment",
  "Adaptive e-learning platforms",
];

const UseCases = () => {
  const ref = useScrollReveal();

  return (
    <section id="use-cases" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-16">
          AI applied where it<br />actually matters
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Use Cases */}
          <div>
            <h3 className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Use Cases
            </h3>
            <div className="space-y-3">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 cursor-default`}
                >
                  <ChevronRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform duration-300" />
                  <span className="text-foreground text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="reveal text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Services
            </h3>
            <div className="space-y-3">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 cursor-default`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
