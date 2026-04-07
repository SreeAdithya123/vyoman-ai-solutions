const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
            V
          </div>
          <span className="text-base font-semibold text-foreground">Vyoman AI Solutions</span>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-gradient-accent font-medium">Wisdom Engineered with AI</p>
          <p className="text-xs text-muted-foreground mt-1">
            Built in India for businesses that want to scale with intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
