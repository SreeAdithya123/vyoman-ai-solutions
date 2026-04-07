const SocialProofStrip = () => {
  const text = "Trusted by growing businesses building smarter systems and scaling faster with AI";

  return (
    <section className="py-8 border-y border-border overflow-hidden bg-secondary/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-12 text-sm text-muted-foreground tracking-wide">
            {text} <span className="text-primary mx-4">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default SocialProofStrip;
