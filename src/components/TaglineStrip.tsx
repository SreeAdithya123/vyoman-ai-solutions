import { useScrollReveal } from "@/hooks/useScrollReveal";

const TaglineStrip = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-16 px-6 bg-foreground">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <p className="reveal text-2xl md:text-4xl font-bold tracking-tight text-background">
          AI that earns its place in your business
        </p>
      </div>
    </section>
  );
};

export default TaglineStrip;
