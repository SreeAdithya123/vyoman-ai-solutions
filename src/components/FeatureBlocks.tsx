import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Workflow, Database, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Built for real workflows",
    desc: "No forced dashboards. No unnecessary features. Your system is designed around how your business already operates.",
  },
  {
    icon: Database,
    title: "Works with your data",
    desc: "Your data is your advantage. We build systems that understand it and turn it into decisions and actions.",
  },
  {
    icon: TrendingUp,
    title: "Scales as you grow",
    desc: "From early stage to scaling business, your system grows with you. No rebuilds. No starting over.",
  },
  {
    icon: Shield,
    title: "Delivered end to end",
    desc: "Strategy, development, deployment, and support. Everything handled by one team with full accountability.",
  },
];

const FeatureBlocks = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} p-8 rounded-xl border border-border bg-card glow-card`}
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
