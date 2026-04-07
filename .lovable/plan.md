

## Redesign to Match Reference Screenshots

The uploaded images show a refined version of the current site with several layout and style differences. Here is what needs to change:

### 1. Navbar Update (`Navbar.tsx`)
- Add a purple "V" square logo icon before "Vyoman AI Solutions"
- Change nav links to: Product, Use Cases, Services, Why Us
- Add "Log in" text link before the "Contact Us" button
- "Contact Us" button gets a bordered/outline style

### 2. Hero Section Update (`HeroSection.tsx`)
- Green dot before the tagline "Built for teams that want results, not experiments"
- Larger, bolder typography for headline
- Add "TRUST & CREDENTIALS" label above trust badges
- Trust badges displayed inline with dot separators instead of pill badges

### 3. Product Pitch Update (`ProductPitch.tsx`)
- Left-aligned headline, second line in gradient/muted color
- Body text as a flowing paragraph (not bullet points)
- Remove the benefit grid cards entirely -- integrate benefits into the paragraph text

### 4. Feature Blocks Update (`FeatureBlocks.tsx`)
- Keep 2x2 grid but make cards more spacious
- Icon displayed in a subtle circular/rounded container at top
- More padding, cleaner look

### 5. Use Cases + Services Combined Layout
- Display Use Cases and Services side-by-side in two columns
- Use Cases on left with ">" chevron arrows
- Services on right with bullet dots
- Remove separate section backgrounds, merge into one section

### 6. Differentiation Update (`Differentiation.tsx`)
- Center-aligned headline and body text
- Remove red X icons, remove destructive styling
- 4 cards in a single horizontal row with centered text
- Clean bordered cards without color tints

### 7. Why Vyoman Update (`WhyVyoman.tsx`)
- Centered headline, white text (not gradient)
- Numbered items (01-05) instead of icons
- 3-column top row + 2-column bottom row layout
- No card borders, just text with numbers
- Subtle background section

### 8. Philosophy Update (`Philosophy.tsx`)
- Add periods: "AI is not the goal." / "Better business outcomes are."
- Second line in muted gradient color

### 9. Tagline Strip Update (`TaglineStrip.tsx`)
- White/light background with dark text instead of dark section
- Bold centered text

### 10. CTA + Contact Combined (`CTASection.tsx` + `ContactSection.tsx`)
- Merge into one section with side-by-side layout
- Left side: CTA headline, subheadline, two buttons ("Talk to us" with arrow, "Get started")
- Right side: Contact info card with company details, email, phone (using @ and # icons)
- Remove the form entirely (visual-only contact card)
- Phone number updated to "+91 89859 88999" per screenshot

### 11. Footer Update (`Footer.tsx`)
- Add purple "V" logo icon matching navbar
- "Wisdom Engineered with AI" in accent color on right
- "Built in India..." line below on right

### 12. Remove `SocialProofStrip.tsx`
- The marquee strip is not shown in the reference images; remove it from Index.tsx

### Files to modify
- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/ProductPitch.tsx`
- `src/components/FeatureBlocks.tsx`
- `src/components/UseCases.tsx` -- merge with Services into combined section
- `src/components/Services.tsx` -- remove, merge into UseCases
- `src/components/Differentiation.tsx`
- `src/components/WhyVyoman.tsx`
- `src/components/Philosophy.tsx`
- `src/components/TaglineStrip.tsx`
- `src/components/CTASection.tsx` -- merge with Contact
- `src/components/ContactSection.tsx` -- remove, merge into CTA
- `src/components/Footer.tsx`
- `src/pages/Index.tsx` -- remove SocialProofStrip, Services, ContactSection imports

