const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-foreground">
            Vyoman<span className="text-gradient-accent"> AI</span> Solutions
          </p>
          <p className="text-sm text-muted-foreground mt-1">Wisdom Engineered with AI</p>
        </div>

        <p className="text-xs text-muted-foreground text-center md:text-right">
          Built in India for businesses that want to scale with intelligence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
