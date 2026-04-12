

## Add Accordion Dropdowns to "What We Do" Section

Convert each feature bullet in `FeatureBlocks.tsx` into an expandable accordion item with a brief explanation paragraph.

### Changes

**`src/components/FeatureBlocks.tsx`**:
- Import `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` from `@/components/ui/accordion`
- Replace the `features` string array with an array of objects containing `title` and `description`
- Descriptions:
  1. **Custom products & SaaS** — "Whether it's an internal dashboard, a customer-facing app, or a full SaaS product — we design and build it from scratch to fit your exact workflows, team size, and growth goals."
  2. **Operational problems** — "From automating repetitive tasks to streamlining complex processes, we use AI and modern tech to eliminate bottlenecks and make your operations run smoother."
  3. **Save time, reduce costs** — "Our tools are built to deliver real ROI — helping your team work faster, cut unnecessary expenses, and discover new ways to generate revenue."
  4. **Scale faster** — "Every solution we build is designed to handle growth. As your business expands, your tools expand with it — no rebuilds, no migrations, no headaches."
- Replace the current card list with an `Accordion` component (type="single", collapsible) rendering each item as an `AccordionItem` with styled trigger and content
- Keep the existing scroll reveal animations and visual styling

