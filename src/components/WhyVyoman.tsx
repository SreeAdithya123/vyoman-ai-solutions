import { useScrollReveal } from "@/hooks/useScrollReveal";

const objections = [
  {
    question: '"We already have some tools"',
    answer: "We don't replace what works. We build smart products and SaaS on top of your existing setup so everything becomes more powerful and growth-focused.",
  },
  {
    question: '"Is this only for big companies?"',
    answer: "No. We specialize in Indian SMBs and growing businesses — exactly where smart products and SaaS deliver the fastest growth and biggest returns.",
  },
  {
    question: '"What if I\'m not technical?"',
    answer: "Perfect. You don't need to be. Just bring your business problems. We handle the tech and show you how it grows your revenue, saves time, and simplifies operations.",
  },
];

const WhyVyoman = () => {
  const ref = useScrollReveal();

  return (
    <section id="why-vyoman" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
          Still wondering if we're the right fit?
        </h2>

        <div className="space-y-6">
          {objections.map((o, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} p-6 md:p-8 rounded-xl border border-border bg-card`}
            >
              <h3 className="text-lg font-semibold text-primary mb-3">{o.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{o.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVyoman;
