import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const offerings = [
  {
    num: "01",
    title: "Discovery Call",
    price: "Free | 30 Minutes | No Commitment",
    desc: "Tell us your biggest business challenge. We'll show you exactly how product development and SaaS can solve it and drive growth. You walk away with clear next steps.",
    cta: { label: "Book Your Free Strategy Call", href: "#contact" },
  },
  {
    num: "02",
    title: "Product & SaaS Build",
    price: "Custom Scoped | Fixed Price | Defined Timeline",
    desc: "We design, develop, and deliver a complete custom product or SaaS platform built specifically for your business needs. From idea to launch — on time and on budget.",
  },
  {
    num: "03",
    title: "AI MasterClass + Growth Partnership",
    price: "Monthly AI MasterClass | Ongoing Support",
    desc: "Join our AI MasterClass every month and get hands-on learning plus continued product and SaaS development support. Think of us as your embedded growth partner.",
  },
];

const UseCases = () => {
  const ref = useScrollReveal();

  return (
    <section id="use-cases" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
          Choose where to begin.<br />Grow as you need.
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground mb-16">
          Every engagement is clear, transparent, and focused on your business growth. You own everything we build.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((o, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} p-6 md:p-8 rounded-xl border border-border bg-card glow-card flex flex-col`}
            >
              <span className="text-xs font-mono text-primary mb-4">{o.num}</span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{o.title}</h3>
              <p className="text-xs font-medium text-primary/80 mb-4">{o.price}</p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{o.desc}</p>
              {o.cta && (
                <Button size="sm" className="rounded-full mt-6 gap-2 w-fit" asChild>
                  <a href={o.cta.href}>{o.cta.label} <ArrowRight className="w-3.5 h-3.5" /></a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
