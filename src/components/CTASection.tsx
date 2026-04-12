import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-6">
          Ready to solve your business<br />problems and grow faster?
        </h2>
        <p className="reveal reveal-delay-1 text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          We build the products and SaaS you actually need — and teach you how to keep growing every month through our AI MasterClass.
        </p>
        <div className="reveal reveal-delay-2">
          <Button size="lg" className="rounded-full px-10 text-base gap-2" asChild>
            <a href="mailto:sreeadithya.ndd@gmail.com">
              Book Your Free Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="mailto:sreeadithya.ndd@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4 text-primary" />
            sreeadithya.ndd@gmail.com
          </a>
          <a href="https://wa.me/917013271894" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            +91 70132 71894
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Nidadavole, Andhra Pradesh
          </span>
        </div>

        <p className="reveal reveal-delay-4 mt-8 text-xs text-muted-foreground">
          Government-registered MSME · Nidadavole, Andhra Pradesh · No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
