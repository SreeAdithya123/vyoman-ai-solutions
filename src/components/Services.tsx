import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Cpu, Globe, Wrench, MessageSquare, GraduationCap } from "lucide-react";

const services = [
  { icon: Cpu, text: "Custom AI systems built for your business" },
  { icon: Globe, text: "SaaS platforms designed around your workflow" },
  { icon: Wrench, text: "AI powered tools and internal products" },
  { icon: MessageSquare, text: "Consulting, integration, and deployment" },
  { icon: GraduationCap, text: "Adaptive e-learning platforms" },
];

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-secondary/20">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-14">
          Everything you need to<br />make AI work
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-start gap-4 p-6 rounded-xl border border-border bg-card glow-card`}
            >
              <s.icon className="w-6 h-6 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
