

## Add "Our Team" Section

### Overview
Add a new Team section to the landing page showcasing leadership and core team members, placed between the Philosophy and TaglineStrip sections.

### New File: `src/components/TeamSection.tsx`
Create a team section with three tiers matching the site's black-and-white theme:

- **Section header**: "Our Team" with subtitle about the team's mission
- **Leadership card** (larger, prominent):
  - K. Sree Adithya — Founder & CEO
- **Core Team card** (medium):
  - G. Yohan Raju — Head of Marketing
- **AI Research & Innovation Team** (grid of 3):
  - B. Maha Lakshmi — AI Research and Development Intern
  - S. Srisanth — AI Research and Innovation Intern
  - Y. Chiranjeevi — AI Research and Innovation Intern
- **Closing line**: "Our team combines strong technical expertise with fresh perspectives..."

Each person rendered as a card with an avatar fallback (initials), name, and role. Uses existing `useScrollReveal` for animations, existing theme colors, and border/card styles consistent with the rest of the site.

### Modified File: `src/pages/Index.tsx`
Import `TeamSection` and place it between `<Philosophy />` and `<TaglineStrip />`.

### Files
- **Create**: `src/components/TeamSection.tsx`
- **Edit**: `src/pages/Index.tsx` (add import + component)

