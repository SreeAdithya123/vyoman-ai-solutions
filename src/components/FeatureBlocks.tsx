import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const features = [
  {
    title: "We build custom products and SaaS platforms tailored exactly to how your business runs",
    description:
      "Whether it's an internal dashboard, a customer-facing app, or a full SaaS product — we design and build it from scratch to fit your exact workflows, team size, and growth goals.",
  },
  {
    title: "We solve real operational problems using smart, practical technology",
    description:
      "From automating repetitive tasks to streamlining complex processes, we use AI and modern tech to eliminate bottlenecks and make your operations run smoother.",
  },
  {
    title: "We create tools that save time, reduce costs, and open new revenue opportunities",
    description:
      "Our tools are built to deliver real ROI — helping your team work faster, cut unnecessary expenses, and discover new ways to generate revenue.",
  },
  {
    title: "We help you scale faster with solutions that grow with your business",
    description:
      "Every solution we build is designed to handle growth. As your business expands, your tools expand with it — no rebuilds, no migrations, no headaches.",
  },
];

const FeatureBlocks = () => {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
          We turn your business problems<br />into growth engines.
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground mb-12">
          We do <strong className="text-foreground">product development and SaaS</strong> that solve your biggest challenges and help your business grow.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {features.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 px-5`}
            >
              <AccordionTrigger className="text-foreground text-left hover:no-underline">
                {f.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="reveal reveal-delay-4 text-sm text-muted-foreground mt-8 text-center">
          Every project is designed to deliver measurable growth — not just features.
        </p>
      </div>
    </section>
  );
};

export default FeatureBlocks;
