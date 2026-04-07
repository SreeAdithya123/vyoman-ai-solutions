import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { num: "01", title: "Built for outcomes", desc: "Every system is designed to deliver measurable results" },
  { num: "02", title: "Direct collaboration", desc: "You work with the people building your system" },
  { num: "03", title: "Fast execution", desc: "From idea to deployment without unnecessary delays" },
  { num: "04", title: "Cost efficient", desc: "High impact systems without enterprise level pricing" },
  { num: "05", title: "Credible and structured", desc: "MSME registered with real accountability" },
];

const WhyVyoman = () => {
  const ref = useScrollReveal();

  return (
    <section id="why-vyoman" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div ref={ref} className="max-w-6xl mx-auto text-center">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-16">
          Why teams choose Vyoman
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} text-left ${i >= 3 ? "lg:col-start-auto" : ""}`}
            >
              <span className="text-xs font-mono text-primary mb-3 block">{r.num}</span>
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
