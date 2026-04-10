import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA */}
          <div>
            <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-6">
              Start building something<br />that actually works
            </h2>
            <p className="reveal reveal-delay-1 text-lg text-muted-foreground mb-10">
              Tell us what you are trying to solve. We will help you turn it into a working system.
            </p>
            <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 text-base gap-2" asChild>
                <a href="mailto:sreeadithya.ndd@gmail.com">
                  Talk to us <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-border" asChild>
                <a href="mailto:sreeadithya.ndd@gmail.com">Get started</a>
              </Button>
            </div>
          </div>

          {/* Right: Contact card */}
          <div className="reveal reveal-delay-2 p-6 md:p-8 rounded-xl border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Let us understand your problem first</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              No sales pitch. No technical jargon.
              Just a clear discussion about your business and how AI can help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>sreeadithya.ndd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 70132 71894</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>West Godavari, Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Vyoman AI Solutions<br />
                UDYAM-AP-12-0115093
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
