import { useScrollReveal } from "@/hooks/useScrollReveal";

const points = [
  "No generic solutions",
  "No overengineering",
  "No dependency on multiple vendors",
  "No disconnect between idea and execution",
];

const Differentiation = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto text-center">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-6">
          Most AI projects fail<br />before they deliver value
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
          Not because the technology does not work.
          Because it is not built for the business using it.
          <span className="block mt-2 text-foreground font-medium">We solve that.</span>
        </p>

        <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((p, i) => (
            <div key={i} className="p-6 rounded-xl border border-border text-center">
              <span className="text-sm text-muted-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
