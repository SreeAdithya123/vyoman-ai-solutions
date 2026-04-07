import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";

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
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-6">
          Most AI projects fail<br />before they deliver value
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Not because the technology does not work.
          Because it is not built for the business using it.
          <span className="block mt-2 text-foreground font-medium">We solve that.</span>
        </p>

        <div className="reveal reveal-delay-2 grid sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <X className="w-4 h-4 text-destructive shrink-0" />
              <span className="text-muted-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
