

## Rewrite All Sections to Match New Copywriting

This is a comprehensive content overhaul across most page components. The site structure will be reorganized to match the new copy's sections.

### New Section Mapping

| New Copy Section | Component | Action |
|---|---|---|
| Hero | `HeroSection.tsx` | Rewrite content |
| Who We Are | `ProductPitch.tsx` | Rewrite content |
| What We Do | `FeatureBlocks.tsx` | Replace 4 cards with bullet list format |
| What We Offer | `UseCases.tsx` | Replace with 3 offerings (Discovery Call, Product Build, AI MasterClass) |
| Why Vyoman | `WhyVyoman.tsx` | Replace with 3 FAQ-style objection handlers |
| Final CTA | `CTASection.tsx` | Rewrite content |
| TaglineStrip | `TaglineStrip.tsx` | Remove (no equivalent in new copy) |
| Differentiation | `Differentiation.tsx` | Remove (merged into Why Vyoman) |
| Philosophy | `Philosophy.tsx` | Remove (no equivalent) |

### Files Modified

1. **`src/components/HeroSection.tsx`** — New headline ("Your Business Doesn't Need Another Tech Demo"), new subtext, new trust badges (Government-Registered MSME, Nidadavole AP, UDYAM, Built for Indian Businesses), update CTA buttons to "Book a Free Strategy Call" and "See What We Build"

2. **`src/components/ProductPitch.tsx`** — Rename to "Who We Are" section with new content about being a lean product/SaaS partner, trust points as bullet list

3. **`src/components/FeatureBlocks.tsx`** — Rename to "What We Do" with heading "We turn your business problems into growth engines" and 4 bullet points about product/SaaS development

4. **`src/components/UseCases.tsx`** — Replace with "What We Offer" — 3 numbered offerings (Discovery Call, Product & SaaS Build, AI MasterClass) as styled cards

5. **`src/components/WhyVyoman.tsx`** — Replace with 3 objection-handling blocks ("We already have some tools", "Is this only for big companies?", "What if I'm not technical?")

6. **`src/components/CTASection.tsx`** — New headline "Ready to solve your business problems and grow faster?", updated CTA button, footer note about MSME registration

7. **`src/pages/Index.tsx`** — Remove `TaglineStrip`, `Differentiation`, `Philosophy` imports and usage

8. **`src/components/Navbar.tsx`** — Update nav links to match new sections: "Who We Are" (#product), "What We Do" (#features), "What We Offer" (#use-cases), "Why Vyoman" (#why-vyoman), "Our Team" (/team). Remove "Log in" link. Keep "Contact Us" button.

9. **`src/components/Footer.tsx`** — Update footer links to match new nav, add "Government-registered MSME · Nidadavole, Andhra Pradesh · No spam, ever." text

### Files Deleted (imports removed)
- `TaglineStrip.tsx`, `Differentiation.tsx`, `Philosophy.tsx` — content removed from page; files can remain but won't be imported

