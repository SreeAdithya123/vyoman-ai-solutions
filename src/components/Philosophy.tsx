import { useScrollReveal } from "@/hooks/useScrollReveal";

const Philosophy = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight mb-8">
          <span className="text-foreground">AI is not the goal.</span>
          <br />
          <span className="text-gradient">Better business outcomes are.</span>
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground leading-relaxed">
          We do not build AI for the sake of it.
          We build it to reduce effort, improve decisions, and create leverage.
          <span className="block mt-4 text-foreground font-medium">
            If it does not create value, it does not get built.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
