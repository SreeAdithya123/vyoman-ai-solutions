import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Who We Are", href: "/#product" },
  { label: "What We Do", href: "/#features" },
  { label: "What We Offer", href: "/#use-cases" },
  { label: "Why Vyoman", href: "/#why-vyoman" },
  { label: "Our Team", href: "/team", isRoute: true },
  { label: "Contact Us", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center text-sm font-bold text-background">
                V
              </div>
              <span className="text-base font-semibold text-foreground">Vyoman AI Solutions</span>
            </div>
            <p className="text-sm text-gradient-accent font-medium mt-2 text-center md:text-left">Wisdom Engineered with AI</p>
            <p className="text-xs text-muted-foreground mt-1 text-center md:text-left">
              Built in India for businesses that want to scale with intelligence
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {footerLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Government-registered MSME · Nidadavole, Andhra Pradesh · No spam, ever.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Vyoman AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
