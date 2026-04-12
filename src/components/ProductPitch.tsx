import { useScrollReveal } from "@/hooks/useScrollReveal";

const trustPoints = [
  { label: "Founder-led", desc: "you speak directly to the person building your product" },
  { label: "MSME registered", desc: "credible, accountable, and here for the long term" },
  { label: "India-first", desc: "we understand your market, your customers, and your challenges" },
  { label: "No lock-in", desc: "you own every product and SaaS we build" },
];

const ProductPitch = () => {
  const ref = useScrollReveal();

  return (
    <section id="product" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-foreground">We're Vyoman AI Solutions</span>
          <br />
          <span className="text-gradient">your lean product and SaaS partner in India.</span>
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground max-w-3xl leading-relaxed mt-8">
          We are a government-registered AI solutions company based in <strong className="text-foreground">Nidadavole, West Godavari, Andhra Pradesh</strong>.
        </p>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground max-w-3xl leading-relaxed mt-4">
          We don't just build tech. We solve real business problems and create custom products and SaaS platforms that help ambitious founders and growing teams scale faster.
        </p>
        <p className="reveal reveal-delay-2 text-lg text-muted-foreground max-w-3xl leading-relaxed mt-4">
          No middlemen. No bloat. No complicated contracts. Just practical solutions that deliver growth.
        </p>

        <div className="mt-12">
          <h3 className="reveal reveal-delay-2 text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-6">
            Why businesses trust us
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 2, 4)} flex items-start gap-3 p-4 rounded-lg border border-border bg-card`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <div>
                  <span className="text-foreground font-semibold text-sm">{point.label}</span>
                  <span className="text-muted-foreground text-sm"> — {point.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPitch;
