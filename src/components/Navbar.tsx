import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Product", href: "#product" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Services", href: "#use-cases" },
    { label: "Why Us", href: "#why-vyoman" },
    { label: "Our Team", href: "/team", isRoute: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-foreground">
          <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center text-sm font-bold text-background">
            V
          </div>
          <span className="text-base font-semibold tracking-tight">Vyoman AI Solutions</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
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
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            Log in
          </a>
          <Button size="sm" variant="outline" className="rounded-full px-5 border-border" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 animate-fade-in">
          {links.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a href="#contact" className="block py-3 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Log in</a>
          <Button size="sm" variant="outline" className="rounded-full px-5 mt-3 w-full border-border" asChild>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact Us</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
