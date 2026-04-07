

## Fix Hero Headline Layout

The headline "AI that actually works" is currently wrapping across two lines at some viewport sizes because the fluid font size `clamp(3rem,8vw,7rem)` can be too large.

### Change
In `src/components/HeroSection.tsx`, add `whitespace-nowrap` to the first headline span so "AI that actually works" always stays on one line, and slightly reduce the max clamp value to prevent overflow on smaller screens:

- Line 41: Change `text-[clamp(3rem,8vw,7rem)]` to `text-[clamp(2.5rem,6.5vw,5.5rem)]`
- Line 42: Add `whitespace-nowrap` to the first `<span>` element

This ensures "AI that actually works" renders on a single line with "for your business" on the line below.

