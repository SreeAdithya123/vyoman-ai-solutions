import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="reveal text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-6">
              Let us understand your problem first
            </h2>
            <p className="reveal reveal-delay-1 text-muted-foreground leading-relaxed mb-10">
              No sales pitch. No technical jargon.
              Just a clear discussion about your business and how AI can help.
            </p>

            <div className="reveal reveal-delay-2 space-y-5">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>sreeadithya.ndd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 70132 71894</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>West Godavari, Andhra Pradesh, India</span>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Vyoman AI Solutions<br />
                  UDYAM-AP-12-0115093
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form (visual only) */}
          <div className="reveal reveal-delay-2">
            <form
              className="space-y-5 p-8 rounded-xl border border-border bg-card"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your name" className="bg-secondary/50 border-border" />
                <Input placeholder="Email address" type="email" className="bg-secondary/50 border-border" />
              </div>
              <Input placeholder="Company / Organization" className="bg-secondary/50 border-border" />
              <Textarea placeholder="Tell us what you're trying to solve..." rows={5} className="bg-secondary/50 border-border resize-none" />
              <Button className="w-full rounded-full" size="lg">
                Start a conversation
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No commitment. We will respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
