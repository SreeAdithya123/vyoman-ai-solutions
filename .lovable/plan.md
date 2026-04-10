
## Rearrange Team Section — Leadership + Core Side by Side

### Change
In `src/components/TeamSection.tsx`, merge the Leadership and Core Team rows into a single side-by-side layout:

- Replace the separate Leadership and Core Team `<div>` blocks with one row using `grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto`
- Both K. Sree Adithya and G. Yohan Raju rendered as equal-sized cards (remove `large` prop distinction)
- Add a shared label like "Leadership & Core Team" above the row
- Research team stays as a 3-column grid below
- Keep closing paragraph as-is

### File Modified
- `src/components/TeamSection.tsx`
