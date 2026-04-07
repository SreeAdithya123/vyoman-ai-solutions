import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, Zap, DollarSign, BadgeCheck } from "lucide-react";

const reasons = [
  { icon: Target, title: "Built for outcomes", desc: "Every system is designed to deliver measurable results" },
  { icon: Users, title: "Direct collaboration", desc: "You work with the people building your system" },
  { icon: Zap, title: "Fast execution", desc: "From idea to deployment without unnecessary delays" },
  { icon: DollarSign, title: "Cost efficient", desc: "High impact systems without enterprise level pricing" },
  { icon: BadgeCheck, title: "Credible and structured", desc: "MSME registered with real accountability" },
];

const WhyVyoman = () => {
  const ref = useScrollReveal();

  return (
    <section id="why-vyoman" className="py-24 md:py-32 px-6 bg-secondary/20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-14">
          Why teams choose Vyoman
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} p-6 rounded-xl border border-border bg-card glow-card`}
            >
              <r.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVyoman;
