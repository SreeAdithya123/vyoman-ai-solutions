import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProductPitch = () => {
  const ref = useScrollReveal();

  return (
    <section id="product" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight mb-8">
          <span className="text-foreground">From idea to working AI,</span>
          <br />
          <span className="text-gradient">without the complexity</span>
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          You do not need to figure out tools, models, or infrastructure.
          We design, build, and deploy AI systems that fit into your existing workflow,
          learn from your data, improve speed and decision making, and deliver measurable
          business outcomes. Everything is handled end to end by one team.
        </p>
      </div>
    </section>
  );
};

export default ProductPitch;
